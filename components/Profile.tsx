"use client"
import Image from 'next/legacy/image';
import React,{useState} from 'react';
import { RxArrowRight } from 'react-icons/rx';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import Link from 'next/link';

type Order = { orderId: string; orderDate: Date };
type Payment = { paymentId: string; paymentDate: Date };

interface UserProfile {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    avatar: string;
    orderHistory: Order[];
    paymentHistory: Payment[];
    createdAt: string;
}

interface ProfileViewProps {
  user: UserProfile;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
      setIsDropdownOpen2(!isDropdownOpen2);
    };
  return (
    <>
    <div className="py-6 w-full text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Here you can view your profile information.
            </p>
            </div>
            <Link href={"/profile/edit"}>
                <button className='flex items-center bg-gray-900 px-4 py-2 gap-2 rounded-lg text-white'>Edit<RxArrowRight/></button>
            </Link>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="sm:p-4 flex items-center">
              <Image
              height={50}
              width={50}
                src={user.avatar}
                alt="User Avatar"
                className="rounded-full h-12 w-12 object-cover mr-4"
              />
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700 text-lg">
                  Name
                </label>
                <p className="mt-1 text-sm text-gray-900">{user.name}</p>
              </div>
            </div>
            <div className="sm:p-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
            <div className="sm:p-4">
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                Address
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.address}</p>
            </div>
            <div className="sm:p-4">
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <p className="mt-1 text-sm text-gray-900">{user.phoneNumber}</p>
            </div>
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
    <div>
    <div className='py-6 w-full text-gray-900'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
      <button onClick={toggleDropdown} className="border p-2 shadow-sm hover:bg-gray-50 w-full flex justify-between rounded-lg">
        Order History {isDropdownOpen?<IoIosArrowDropupCircle size={"27px"}/>:<IoIosArrowDropdownCircle size={"27px"}/>}
      </button>
      {isDropdownOpen && (
        <div className="border p-2 mt-2 bg-white shadow">
          {user.orderHistory.map((item)=>(
            <div key={item.orderId}>
          <p>{item.orderDate.toISOString()}</p>
          <p>It can contain any content you want.</p>
          </div>
          ))}
        </div>
      )}
    </div>
    </div>
    <div className='py-6 w-full text-gray-900'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
      <button onClick={toggleDropdown2} className="border p-2 shadow-sm hover:bg-gray-50 w-full flex justify-between rounded-lg">
        Payment History{isDropdownOpen2?<IoIosArrowDropupCircle size={"27px"}/>:<IoIosArrowDropdownCircle size={"27px"}/>}
      </button>
      {isDropdownOpen2 && (
        <div className="border p-2 mt-2 bg-white shadow">
            {user.paymentHistory.map((item)=>(
                <div key={item.paymentId}>
          <p>{item.paymentDate.toDateString()}</p>
          <p>It can contain any content you want.</p>
          </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
    </>
  );
};

export default ProfileView;
