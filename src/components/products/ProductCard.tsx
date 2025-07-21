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

  const handleImageError = () => {
    setImageError(true);
  };

  if (!mounted) {
    return (
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
        <div className="w-full aspect-square bg-gray-100 animate-pulse"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-100 rounded mb-2"></div>
          <div className="h-8 bg-gray-100 rounded mb-4"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md group">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-square bg-gray-50 p-2">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ) : (
            <Image
              src={product.images.main}
              alt={product.name}
              fill
              // PERUBAHAN UTAMA: object-cover diubah menjadi object-contain
              // Ini akan memastikan seluruh gambar terlihat.
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              priority={product.featured}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-2 truncate">{product.name}</h3>
          <p className="text-xl font-bold mb-4">Rp {product.price.toLocaleString('id-ID')}</p>
          <div className="flex space-x-2">
            {product.links.tokopedia && (
              <span
                className="flex items-center justify-center bg-green-500 hover:bg-green-400 text-white text-sm font-medium py-2 rounded-md transition flex-1"
              >
                <Image
                  src="/tokped.png"
                  alt="Tokopedia"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                Tokopedia
              </span>
            )}
            {product.links.shopee && (
              <span
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium py-2 rounded-md transition flex-1"
              >
                <Image
                  src="/shopee.png"
                  alt="Shopee"
                  width={16}
                  height={16}
                  className="mr-1"
                />                
                Shopee
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;