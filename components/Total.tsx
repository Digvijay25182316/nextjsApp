"use client"
interface TotalProps {
    total: number;
  }
  
  const Total: React.FC<TotalProps> = ({ total }) => {
    return (
      <div>
        <p className="text-xl font-semibold text-gray-800">₹ {total.toFixed(2)}</p>
      </div>
    );
  };
  
  export default Total;
  