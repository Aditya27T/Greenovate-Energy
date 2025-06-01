import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface SimilarProductsProps {
  products: Product[];
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <section className="py-12 px-6 md:px-12 bg-primary">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">SIMILAR PRODUCTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative w-full aspect-[7/5]">
                  <Image 
                    src={product.images.main} 
                    alt={product.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Navigation Arrows */}
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;