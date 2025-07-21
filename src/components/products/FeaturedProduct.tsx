// src/components/products/FeaturedProductsSlider.tsx

'use client';

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedProductsSliderProps {
  products: Product[];
}

const FeaturedProductsSlider = ({ products }: FeaturedProductsSliderProps) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50/50">
      <div className="container mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="relative"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative bg-gray-100 border-2 border-gray-200 rounded-lg overflow-hidden">
                  <div className="relative w-full h-96">
                    <Image
                      src={product.images.main || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-sm font-semibold text-primary uppercase">Produk Unggulan</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">{product.name}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation and Pagination */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button className="swiper-button-prev-custom p-3 rounded-full bg-white border shadow-md hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="swiper-pagination-custom flex space-x-2"></div>
          <button className="swiper-button-next-custom p-3 rounded-full bg-white border shadow-md hover:bg-gray-100 transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSlider;