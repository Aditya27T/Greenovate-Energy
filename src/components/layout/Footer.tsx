import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/data/site"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-24 w-24">
                  <Image src="/Logo.png" alt={`${siteConfig.title} logo`} fill className="object-contain" priority />
                </div>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                {siteConfig.description || "Building exceptional digital experiences with passion and precision."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>

            {/* Navigation sections */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Solutions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3">
                {siteConfig.footer.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{siteConfig.footer.address}</span>
                  </div>
                )}
                {siteConfig.footer.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <Link
                      href={`tel:${siteConfig.footer.phone}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {siteConfig.footer.phone}
                    </Link>
                  </div>
                )}
                {siteConfig.footer.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    <Link
                      href={`mailto:${siteConfig.footer.email}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {siteConfig.footer.email}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {siteConfig.title}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {/* Legal links */}
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                  Terms
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {siteConfig.social?.instagram && (
                  <Link
                    href={siteConfig.social.instagram}
                    aria-label="Follow us on Instagram"
                    className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                )}
                {siteConfig.social?.facebook && (
                  <Link
                    href={siteConfig.social.facebook}
                    aria-label="Follow us on Facebook"
                    className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
