import { BannerSection, FeaturedProduct, ProductGrid } from '@/components/products';
import { products, getFeaturedProduct } from '@/data/products';

export default function ProductsPage() {
  const featuredProduct = getFeaturedProduct();
  
  return (
    <>
      <BannerSection title="OUR PRODUCT" />
      {featuredProduct && <FeaturedProduct product={featuredProduct} />}
      <ProductGrid products={products} showPagination={false} />
    </>
  );
}