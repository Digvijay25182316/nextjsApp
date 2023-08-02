import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import { RxArrowRight } from 'react-icons/rx'
import ImageCarousel from './ImageCarousel'

const Hero2:React.FC=() =>{
  return (
    <div className='w-full h-full'>
    <div className='md:flex md:flex-row flex-col items-center justify-center'>
<div className='flex flex-col h-60 md:h-[60vh] items-center justify-center md:items-start gap-7'>
      <div>Welcome to Veda&apos;s Creation</div>
      <div className='text-lg text-center'>Woven with love, cherished with tradition - The Chadar&apos;s story</div>
      <Link href={"/products"}>
      <button className='flex items-center text-xl bg-gray-900 text-white rounded-lg px-4 py-2'>Explore<RxArrowRight/></button>
      </Link>
      </div>

    <div className='flex h-[50vh] md:w-[50vw] w-[90vw] md:h-[70vh] m-4'>
          <ImageCarousel/>
    </div>
    </div>
    <div className="w-[90vw] flex flex-col items-center mx-auto my-10 gap-10">
    <h1>OUR LATEST COLLECTION</h1>      
    <div className='flex md:flex-row flex-col gap-5'>
    <Image src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg" height={400} width={400} alt='image1'/>  
    <Image src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg" height={400} width={400} alt='image1'/>  
    <Image src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg" height={400} width={400} alt='image1'/>  
    </div>
    </div>
    </div>
  )
}

export default Hero2