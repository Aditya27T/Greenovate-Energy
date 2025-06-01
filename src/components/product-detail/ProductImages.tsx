'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImagesProps {
  images: {
    main: string;
    thumbnails: string[];
  };
  name: string;
}

const ProductImages = ({ images, name }: ProductImagesProps) => {
  const [activeImage, setActiveImage] = useState(images.main);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setActiveImage(image);
    setActiveIndex(index);
  };

  return (
    <div>
      {/* Main Product Image */}
      <div className="product-carousel mb-4 relative">
        <div className="main-image rounded-lg overflow-hidden relative aspect-square">
          <Image 
            src={activeImage} 
            alt={name} 
            fill
            className="object-contain"
          />
        </div>
        {/* Navigation Arrows */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          onClick={() => {
            const newIndex = activeIndex === 0 ? images.thumbnails.length - 1 : activeIndex - 1;
            handleThumbnailClick(newIndex === 0 ? images.main : images.thumbnails[newIndex - 1], newIndex);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          onClick={() => {
            const newIndex = (activeIndex + 1) % (images.thumbnails.length + 1);
            handleThumbnailClick(newIndex === 0 ? images.main : images.thumbnails[newIndex - 1], newIndex);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        <div 
          className={`thumbnail ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleThumbnailClick(images.main, 0)}
        >
          <div className="relative aspect-square">
            <Image 
              src={images.main} 
              alt={`${name} thumbnail 1`} 
              fill
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
        {images.thumbnails.map((thumbnail, index) => (
          <div 
            key={index}
            className={`thumbnail ${activeIndex === index + 1 ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(thumbnail, index + 1)}
          >
            <div className="relative aspect-square">
              <Image 
                src={thumbnail} 
                alt={`${name} thumbnail ${index + 2}`} 
                fill
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;