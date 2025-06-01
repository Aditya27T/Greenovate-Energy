import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface SimilarProductsProps {
  products: Product[];
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Produk Serupa</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sm text-blue-600 group-hover:text-blue-800 font-medium">
                    Lihat →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;