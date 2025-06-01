import { notFound } from 'next/navigation';
import { ProductImages, ProductInfo, SimilarProducts } from '@/components/product-detail';
import { getProductById, getSimilarProducts } from '@/data/products';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return notFound();
  }
  
  const similarProducts = getSimilarProducts(params.id);
  
  return (
    <>
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <ProductImages images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </section>
      <SimilarProducts products={similarProducts} />
    </>
  );
}