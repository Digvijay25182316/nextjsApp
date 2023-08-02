"use client"
import { useRouter } from 'next/router';
import React from 'react';

const categoriesData = [
  "Solapur Chadar",
  "Solapur Satranji",
  "Galicha",
  "Turkish Towel",
  "Pancha Towel",
  "Baithak Patti",
  "Napkin",
  "Bedsheet Blanket",
  "Handmade Purse",
  "Travel Bags",
  "Freeze Cover",
];

const Categories: React.FC = () => {  
  return (
    <div >
      <ul className={`flex text-sm gap-4 overflow-scroll scrollbar-hide mx-4`}>
        {categoriesData.map((category, index) => (
          <li key={index} className="text-blue-500 hover:underline min-w-max p-2 text-[15px] font-semibold">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
