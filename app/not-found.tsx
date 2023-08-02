import Link from 'next/link';
import React from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className=''>
      <BsExclamationCircleFill className="text-[100px]"/>
      </div>
      <h1 className="text-4xl font-semibold mt-8">Page Not Found</h1>
      <p className="text-xl text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link href={"/"}>
      <button className='bg-gray-900 text-white rounded-lg px-4 py-2 mt-5'>Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
