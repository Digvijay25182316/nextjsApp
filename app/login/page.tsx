import Link from 'next/link';
import React from 'react';

const LoginPageWrapper: React.FC = () => {
  return (
    <div className='flex flex-col items-center '>
      <div className='bg-white shadow-lg p-10 rounded-lg'>
        <h1 className='font-bold text-3xl my-10 text-center'>Login</h1>
<div className='flex flex-col gap-5'>
        <div className='w-[90vw] sm:w-[35vw] gap-3 flex flex-col'>
        <label htmlFor="email-address" className=" text-gray-800 text-lg font-bold">
                Email address
        </label>
            <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-red-400 sm:text-sm"
                placeholder="Email address"
              />
        </div>
        <div className='w-[90vw] sm:w-[35vw] gap-3 flex flex-col'>
        <label htmlFor="email-address" className=" text-gray-800 text-lg font-bold">
                Password
        </label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-red-400 sm:text-sm"
                placeholder="password"
              />
        </div>
      <p className='w-full '><span className='text-gray-800 font-semibold hover:underline'>Forget Password</span></p>
      <div className='w-full'>
      <button className='text-gray-800 bg-red-400 font-semibold px-4 py-1.5 rounded-lg hover:bg-red-600'>Login</button>
      <div className='mt-5'>
        <p>Dont have account? <Link href={"/register"} className='text-red-500 underline'>Sign Up</Link> here</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPageWrapper;
