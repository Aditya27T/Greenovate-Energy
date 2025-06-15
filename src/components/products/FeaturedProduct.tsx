import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types"

interface FeaturedProductProps {
  product: Product
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative bg-gray-200  border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="relative w-full h-96">
            <Image
              src={product.images.main || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Button positioned over the image */}
          <div className="absolute -bottom-2 -right-2 p-6 bg-white border-2 border-gray-200 border-b-0  rounded-tl-lg">
            <Link
              href={`/products/${product.id}`}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md inline-block transition-colors duration-200 shadow-lg"
            >
              Beli Sekarang
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase">{product.name}</h2>
          <p className="text-gray-500 text-lg leading-relaxed">{product.description}</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
