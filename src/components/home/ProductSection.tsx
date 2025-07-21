import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from '@/data/products';

const ProductSection = () => {
  const featuredProduct = getFeaturedProducts();

  if (!featuredProduct) return null;

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full aspect-[5/4]">
          <Image 
            src="/alat/minihydroh.png" 
            alt="Kit pembangkit listrik tenaga air mini hidro horizontal dari Greenovate"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Produk Kami</h2>
          <p className="text-gray-600 mb-6">
            Di Greenovate, kami menyediakan solusi perangkat yang dirancang khusus untuk mengoptimalkan penggunaan energi dan mengurangi dampak lingkungan. Tim ahli kami dapat menangani proyek-proyek dengan skala apa pun. Kami bangga dengan layanan pelanggan kami yang melebihi dari yang ditawarkan oleh pesaing kami.
          </p>
          <Link 
            href="/products" 
            className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md inline-block transition"
          >
            Beli Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;