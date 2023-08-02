import React from 'react';
import Link from 'next/link';
import Logo from "../assets/Logo.svg"
import Image from 'next/legacy/image';
import { FaShoppingCart } from "react-icons/fa"
import Categories from './Category';
import { BsSearch } from "react-icons/bs";
import Sidebar from './Sidebar';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className='sticky top-0 flex flex-col items-center bg-white z-50 w-[100vw]'>
      <div className="flex flex-col items-center gap-3 shadow-md py-4 w-full">
        <div className='container mx-auto flex items-center justify-between px-5'>
          {/* Logo */}
          <div className="font-bold text-xl">
            <Link href="/" className='flex items-center gap-2'>
              <Image src={Logo} height={50} width={50} alt='logo' className='w-50 h-50' layout="fixed"/>
              <p className="text-gray-600">Veda&apos;s Creation</p>
            </Link>
          </div>

          <div className='hidden md:block border border-gray-300 rounded-md'>
            <div className='flex items-center w-[50vw] gap-5 px-5'>
              <div><BsSearch /></div>
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2  focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-x-6 text-center">
            <Link href="/login"><button className='text-gray-800 bg-red-400 font-semibold px-4 py-1.5 rounded-lg hover:bg-red-600 hover:text-white'>Login</button></Link>
            <Link href="/cart"><button className='text-red-500 text-xl hover:text-red-600 '><FaShoppingCart /></button></Link>
            {/* Add any other frequently accessed links */}
          </nav>
        </div>
        <div className='md:hidden w-[90vw] flex items-center gap-3 border border-gray-300 rounded-md px-3'>
          <div className='text-lg'><BsSearch /></div>
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2  focus:outline-none w-full"
          />
        </div>
      </div>
      <div className='flex items-center mt-4 border-b md:ml-0 ml-10'>
        <Sidebar/>
      {<div className='flex flex-col w-[87vw]'>
        <Categories />
      </div>}
      </div>
    </header>
  );
};

export default Header;
