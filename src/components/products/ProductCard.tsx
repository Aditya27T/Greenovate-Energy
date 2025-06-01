'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fungsi untuk menangani error gambar
  const handleImageError = () => {
    setImageError(true);
  };

  // Tampilkan skeleton loader saat di server
  if (!mounted) {
    return (
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full aspect-square bg-gray-100"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-100 rounded mb-2"></div>
          <div className="h-8 bg-gray-100 rounded mb-4"></div>
          <div className="flex space-x-2">
            <div className="h-10 bg-gray-100 rounded flex-1"></div>
            <div className="h-10 bg-gray-100 rounded flex-1"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-square bg-gray-50">
          {/* Gunakan img tag biasa jika image adalah placeholder */}
          {product.images.main.includes('placehold.co') ? (
            <img 
              src={product.images.main} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            // Jika bukan placeholder, coba gunakan Next Image dengan fallback
            <>
              {!imageError ? (
                <Image 
                  src={product.images.main}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="object-cover"
                  priority={product.featured}
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-2">{product.name}</h3>
          <p className="text-xl font-bold mb-4">Rp {product.price.toLocaleString('id-ID')}</p>
          <div className="flex space-x-2">
            {product.links.tokopedia && (
              <Link 
                href={product.links.tokopedia} 
                className="flex items-center justify-center bg-primary hover:bg-opacity-90 text-white text-sm font-medium py-2 rounded-md transition flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-white text-primary rounded-full w-4 h-4 flex items-center justify-center mr-1 text-xs font-bold">T</span>
                Tokopedia
              </Link>
            )}
            {product.links.shopee && (
              <Link 
                href={product.links.shopee} 
                className="flex items-center justify-center bg-red-500 hover:bg-opacity-90 text-white text-sm font-medium py-2 rounded-md transition flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-white text-red-500 rounded-full w-4 h-4 flex items-center justify-center mr-1 text-xs font-bold">S</span>
                Shopee
              </Link>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;