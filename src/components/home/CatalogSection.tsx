'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CatalogSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h2 className="text-lg font-medium text-gray-600">Katalog Produk</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Jelajahi Koleksi Lengkap Produk Energi Terbarukan Kami
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unduh katalog produk terlengkap kami yang berisi spesifikasi detail, 
              panduan instalasi, dan informasi teknis untuk semua produk energi terbarukan. 
              Dapatkan insight mendalam tentang solusi inovatif yang kami tawarkan.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Spesifikasi Lengkap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Panduan Instalasi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Update Terbaru 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Informasi Harga</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Lihat Katalog
              </Link>
              <Link
                href="/catalog?download=true"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download PDF
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Katalog Preview */}
              <div className={`absolute inset-0 bg-white rounded-xl shadow-2xl p-6 transform transition-transform duration-300 ${
                mounted ? 'rotate-3 hover:rotate-0' : 'rotate-3'
              }`}>
                <div className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 flex flex-col">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Image
                        src="/Logo.png"
                        alt="Greenovate Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">KATALOG PRODUK</h4>
                    <p className="text-sm text-gray-600">2025 Edition</p>
                  </div>
                  
                  {/* Mini Product Grid */}
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <div className="w-full h-16 bg-gray-100 rounded mb-1"></div>
                      <div className="text-xs text-gray-600">Mini Hydro</div>
                    </div>
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <div className="w-full h-16 bg-gray-100 rounded mb-1"></div>
                      <div className="text-xs text-gray-600">Generator</div>
                    </div>
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <div className="w-full h-16 bg-gray-100 rounded mb-1"></div>
                      <div className="text-xs text-gray-600">Turbine</div>
                    </div>
                    <div className="bg-white rounded-md p-2 shadow-sm">
                      <div className="w-full h-16 bg-gray-100 rounded mb-1"></div>
                      <div className="text-xs text-gray-600">Accessories</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-500">50+ Products</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              FREE
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              50+ Produk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;