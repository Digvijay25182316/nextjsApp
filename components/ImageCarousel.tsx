"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";

// Replace these with your own image paths
const img1='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3825,w_5823,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1029009367_x1u5we.jpg';
const img2="https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600"
const img3="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600"

const images = [img1, img2, img3]; // Add more image paths as needed

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          } h-full w-full rounded-xl`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
