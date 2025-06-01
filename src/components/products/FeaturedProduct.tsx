import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-transparent rounded-lg shadow-lg p-6">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image 
              src={product.images.main} 
              alt={product.name} 
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>
          <Link 
            href={`/products/${product.id}`} 
            className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md inline-block transition"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;