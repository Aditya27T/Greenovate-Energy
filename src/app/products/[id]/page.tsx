import { notFound } from 'next/navigation';
import { ProductImages, ProductInfo, SimilarProducts } from '@/components/product-detail';
import { getProductById, getSimilarProducts, products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Greenovat-products`,
    description: product.description,
  };
}


export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://www.greenovateenergyslt.com${product.images.main}`,
    brand: {
      '@type': 'Brand',
      name: 'Greenovate Energy Solutions',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: product.price.toString(),
      availability: 'https://schema.org/InStock',
      url: `https://www.greenovateenergyslt.com/products/${product.id}`,
    },
  };

  const similarProducts = getSimilarProducts(params.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <ProductImages images={product.images} name={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <SimilarProducts products={similarProducts} />
          </div>
        )}
      </div>
    </div>
  );
}