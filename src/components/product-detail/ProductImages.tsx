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
  const [selectedImage, setSelectedImage] = useState(images.main);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allImages = [images.main, ...images.thumbnails];

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1;
    setSelectedImage(allImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = selectedIndex === allImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(allImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  return (
    <div className="space-y-4">
      {/* Main Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={selectedImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(image, index)}
              className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 ${
                selectedIndex === index ? 'ring-2 ring-blue-500' : 'hover:opacity-75'
              }`}
            >
              <Image
                src={image}
                alt={`${name} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;