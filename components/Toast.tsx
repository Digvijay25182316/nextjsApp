import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

interface ToastProps {
  type: 'success' | 'failure' | 'loading';
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="text-green-500" />;
      case 'failure':
        return <FiAlertCircle className="text-red-500" />;
      case 'loading':
        return (
          <div className="animate-spin ml-4">
            {/* You can use a loading spinner here */}
            {/* For example, replace this with your desired loading spinner */}
            <div className="flex justify-center items-center">
              <div className="w-5 h-5 rounded-full animate-spin border-t-4 border-blue-500"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed top-10 justify-center px-5 py-3 rounded-lg bg-white text-gray-600 z-[1000] border shadow-xl font-bold transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex items-center gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 justify-start">
            {getIcon()}
            <div className="ml-2">{message}</div>
          </div>
        </div>
        {type !== 'loading' && (
          <button onClick={handleClose} className="ml-4">
            <FiXCircle className="text-red-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
