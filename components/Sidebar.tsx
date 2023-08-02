"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxArrowLeft } from 'react-icons/rx';

const Sidebar: React.FC=() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleSidebarToggle}
      >
        <GiHamburgerMenu/>
      </button>
      <aside
        className={`fixed top-0 left-0 w-2/3 sm:w-1/4 h-full bg-white shadow-2xl p-4 transition-transform ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      ><div className='w-full flex justify-end'>
        <button className='w-fit bg-gray-900 flex items-center px-2 py-1 rounded-lg text-white' onClick={handleSidebarToggle}>
        <RxArrowLeft/>
        close
        </button>
        </div>
      <nav>
        <ul className='flex flex-col gap-5'>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/profile">Profile</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/orders">Order History</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/wishlist">Saved Items/Wishlist</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/addresses">Address Book</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/payment">Payment Methods</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/settings">Settings</Link>
          </li>
            <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
              <Link href="/loyalty">Loyalty/Rewards Points</Link>
            </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/notifications">Notifications</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/support">Help/Support</Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link href="/sign-out">Sign Out</Link>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
