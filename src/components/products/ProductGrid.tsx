import Link from 'next/link';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  showPagination?: boolean;
}

const ProductGrid = ({ products, showPagination = true }: ProductGridProps) => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {showPagination && (
          <div className="mt-12 flex justify-center">
            <Link 
              href="/products" 
              className="bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md inline-block transition"
            >
              Selengkapnya
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;