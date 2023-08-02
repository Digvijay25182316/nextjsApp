"use client"
import Image from "next/legacy/image";
import { useState ,ChangeEvent} from 'react';
import {AiFillDelete} from "react-icons/ai"
import { FaMinus, FaPlus } from 'react-icons/fa';

interface CartItemType {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string; // Assuming that the image is a URL or path to the image file
  }

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [quantity,setQuantity]=useState<number>(1)

  const handleIncrease2 = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleDecrease2 = () => {
    setQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center space-x-4">
        <Image src={item.image} alt={item.name} height={200} width={200} className="w-20 h-20 object-cover rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">₹ {item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <button className=" flex rounded-lg items-center gap-1 bg-red-600 text-white px-2 py-1 hover:bg-red-800" >
          <p>Remove</p><AiFillDelete/>
        </button>
      <div className="flex items-center">
        <FaMinus className="cursor-pointer" onClick={handleDecrease2} />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mx-2 w-10 text-center border border-gray-300"
        />
        <FaPlus className="cursor-pointer" onClick={handleIncrease2} />
      </div>
      </div>
      </div>
  );
};

export default CartItem;
