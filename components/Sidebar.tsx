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
            <Link className='block w-full' href="/profile"><button>Profile</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/orders"><button>Order History</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/wishlist"><button>Saved Items/Wishlist</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/addresses"><button>Address Book</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/payment"><button>Payment Methods</button></Link>
          </li>
            <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
              <Link className='block w-full' href="/loyalty"><button>Loyalty/Rewards Points</button></Link>
            </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/notifications"><button>Notifications</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/support"><button>Help/Support</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/sign-out"><button className='flex w-fit'>Sign Out</button></Link>
          </li>
          <li className='hover:bg-gray-100 hover:rounded-lg px-2 py-1'>
            <Link className='block w-full' href="/settings"><button>Settings</button></Link>
          </li>
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
