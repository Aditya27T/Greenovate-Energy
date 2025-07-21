'use client';

import { useState, useEffect } from 'react';
import { BannerSection, ProductGrid } from '@/components/products'; 
import FeaturedProductsSlider from '@/components/products/FeaturedProduct';
import { products, getFeaturedProducts } from '@/data/products'; 
import { Product } from '@/types';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const featuredProducts = getFeaturedProducts(); 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  useEffect(() => {
    let tempProducts = products;

    if (selectedCategory !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, selectedCategory]);
  
  return (
    <>
      <BannerSection title="OUR PRODUCT" />      
      <FeaturedProductsSlider products={featuredProducts} />

      <section className="py-12 px-6 md:px-12 bg-white border-y">
        <div className="container mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Jelajahi Semua Produk</h2>
            <p className="text-gray-600 mt-2">Gunakan filter untuk menemukan produk yang Anda butuhkan.</p>
          </div>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari produk..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} showPagination={false} />
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold mb-2">Produk Tidak Ditemukan</h3>
          <p className="text-gray-600">Silakan coba kata kunci atau filter yang berbeda.</p>
        </div>
      )}
    </>
  );
}