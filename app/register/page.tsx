import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center '>
    <div className='bg-white shadow-xl p-10 rounded-xl'>
        <h1 className='font-bold text-3xl my-10 text-center'>register</h1>
<div className='flex flex-col gap-5'>
        <div className='w-[90vw] sm:w-[35vw] gap-3 flex flex-col'>
        <label htmlFor="email-address" className=" text-gray-800 text-lg font-bold">
        Name
        </label>
            <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-red-400 sm:text-sm"
                placeholder="John Doe"
              />
        </div>
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
      <div className='w-full'>
      <button className='text-gray-800 bg-red-400 font-semibold px-4 py-1.5 rounded-lg hover:bg-red-600'>Register</button>
      <div className='mt-5'>
        <p>Already have account? <Link href={"/login"} className='text-red-500 underline'>Login</Link> here</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page