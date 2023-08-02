"use client"
import Total from './Total';

interface CheckoutProps {
  total: number;
  count:number
  Discount:number
  address:string
}

const Checkout: React.FC<CheckoutProps> = ({ total ,count,Discount, address}) => {
  // Replace this function with your actual checkout logic
  const handleCheckout = () => {
    alert('Checkout clicked! Add your checkout logic here.');
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden md:w-[30vw] flex flex-col items-center">
      <h1 className='font-semibold mt-2 text-gray-800 text-2xl'>Checkout</h1>
      <div className='w-full my-10  flex flex-col gap-10'>
      <div className='w-full px-8 text-lg font-semibold text-gray-700'>Shipping Details</div>
      <div className='flex gap-12 px-10 w-full justify-between text-gray-600 '>
      <p className='font-semibold'>address</p>
      <div className=''>{address}</div>
      </div>
      <div className='font-semibold text-gray-700 px-10 flex justify-between'>
        Items-{count}        
        <div>
      <Total total={total} />
      </div>
      </div>
      {Discount&&<div className='px-10 flex text-gray-700 justify-between font-semibold '>
        Discount
        <div className='text-green-500 text-xl '>
        ₹ {Discount}
        </div>
      </div>}
      </div>
      <div className='px-10 w-full font-semibold text-gray-700 text-xl flex justify-between mb-5'>
      Total Amount
      <div>₹ {total+Discount}</div>
      </div>
      <button
        onClick={handleCheckout}
        className="size-[300px] flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-4"
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
