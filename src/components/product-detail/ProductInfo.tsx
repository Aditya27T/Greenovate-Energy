import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
      <p className="text-gray-600 mb-8">
        {product.description}
      </p>
      
      <div className="mb-8">
        <p className="text-3xl font-bold text-gray-800">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        {product.links.tokopedia && (
          <Link 
            href={product.links.tokopedia}
            className="flex items-center justify-center bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition w-36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-6 w-6 mr-2">
              <Image 
                src="https://placehold.co/24x24/FFFFFF/3CB878?text=T" 
                alt="Tokopedia" 
                fill
                className="object-contain"
              />
            </div>
            Tokopedia
          </Link>
        )}
        {product.links.shopee && (
          <Link 
            href={product.links.shopee}
            className="flex items-center justify-center bg-red-500 hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition w-36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-6 w-6 mr-2">
              <Image 
                src="https://placehold.co/24x24/FFFFFF/EE4D2D?text=S" 
                alt="Shopee" 
                fill
                className="object-contain"
              />
            </div>
            Shopee
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;