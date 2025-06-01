import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      {/* Product Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi Produk</h3>
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Keunggulan</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Teknologi terdepan dan efisiensi tinggi
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Garansi resmi dan layanan purna jual
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Instalasi dan konsultasi gratis
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Ramah lingkungan dan berkelanjutan
          </li>
        </ul>
      </div>

      {/* Purchase Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Beli Produk Ini</h3>
        <div className="space-y-3">
          {product.links.tokopedia && (
            <Link
              href={product.links.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Image
                src="/tokped.png"
                alt="Tokopedia"
                width={24}
                height={24}
                className="mr-3"
              />
              Beli di Tokopedia
            </Link>
          )}
          
          {product.links.shopee && (
            <Link
              href={product.links.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Image
                src="/shopee.png"
                alt="Shopee"
                width={24}
                height={24}
                className="mr-3"
              />
              Beli di Shopee
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;