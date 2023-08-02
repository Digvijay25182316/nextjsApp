"use client"
import React from 'react';
import Image from 'next/legacy/image';
import Rating from './Rating';

interface Item {
    id: number;
    name: string;
    description: string;
    price:Number
    rating:number
    image: string;
  }

interface ProductsGridProps {
    items: Item[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[90vw]">
          {items.map((product,index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:scale-105 cursor-pointer" key={product.id}>
            <Image height={300} width={300} className="w-full h-64 object-cover" src={product.image} alt="Product" />
            <div className="text-left">
              <div className="font-bold text-xl mb-2 pl-4">Product Name</div>
            </div>
            <div className="flex justify-center text-[20px]">
              <span className="text-gray-700 text-2xl w-[90%] font-bold">₹ {product.price.toString()}</span>
            </div>
            <div className="flex justify-center">
              <Rating rating={product.rating}/>
            </div>
            <div className='flex items-center py-2'>
              <button className="bg-green-400 hover:bg-green-700 text-white font-bold px-2 rounded text-[20px] mx-auto">
                Add to Cart
              </button>
            </div>
          </div>
          ))}
        </div>
      );
};

export default ProductsGrid;
