"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types"
import { ChevronDown, CheckCircle, Package } from "lucide-react"

interface ProductInfoProps {
  product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [openSection, setOpenSection] = useState<"spesifikasi" | "komponen" | null>("spesifikasi")

  const toggleSection = (section: "spesifikasi" | "komponen") => {
    setOpenSection(openSection === section ? null : section)
  }

  const AccordionItem = ({
    title,
    sectionId,
    children,
    icon: Icon,
  }: { title: string; sectionId: any; children: React.ReactNode; icon: React.ElementType }) => (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => toggleSection(sectionId)}
        className="w-full flex justify-between items-center py-4 px-5 text-left font-medium text-gray-800 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:bg-gray-50"
        aria-expanded={openSection === sectionId}
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 text-gray-500 ${
            openSection === sectionId ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          openSection === sectionId ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-4 text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 max-w-none">
      {/* Judul dan Harga Produk */}
      <div className="space-y-2">
        <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
          {product.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
        <div className="flex items-baseline space-x-2 pt-1">
          <span className="text-2xl md:text-3xl font-bold text-secondary">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Deskripsi Produk */}
      <div className="bg-gray-50/80 rounded-lg p-5 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
          Deskripsi Produk
        </h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Tombol Pembelian */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-gray-900 flex items-center">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
          Beli Produk Ini
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          {product.links.tokopedia && (
            <Link
              href={product.links.tokopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-[#03AC0E] hover:bg-[#028A0C] text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#03AC0E]/50"
            >
              <Image src="/tokped.png" alt="Tokopedia" width={20} height={20} className="mr-2" />
              Tokopedia
            </Link>
          )}
          {product.links.shopee && (
            <Link
              href={product.links.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-[#EE4D2D] hover:bg-[#D63916] text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/50"
            >
              <Image src="/shopee.png" alt="Shopee" width={20} height={20} className="mr-2" />
              Shopee
            </Link>
          )}
        </div>
      </div>

      {/* Detail Lengkap */}
      <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-3 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <div className="w-1 h-6 bg-primary rounded-full mr-3"></div>
            Detail Lengkap
          </h3>
        </div>

        <AccordionItem title="Spesifikasi Teknis" sectionId="spesifikasi" icon={CheckCircle}>
          <ul className="space-y-3">
            {product.details.specifications.map((spec, index) => (
              <li
                key={index}
                className="flex items-start hover:bg-gray-50/50 -mx-2 px-2 py-1.5 rounded transition-colors duration-150"
              >
                <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{spec}</span>
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Komponen Paket" sectionId="komponen" icon={Package}>
          <ul className="space-y-3">
            {product.details.components.map((comp, index) => (
              <li
                key={index}
                className="flex items-start hover:bg-gray-50/50 -mx-2 px-2 py-1.5 rounded transition-colors duration-150"
              >
                <Package className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{comp}</span>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </div>
    </div>
  )
}

export default ProductInfo
