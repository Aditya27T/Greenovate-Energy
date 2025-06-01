import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link href="/">
            <div className="relative h-16 w-32 mb-4">
              <Image 
                src="/Logo.png" 
                alt={siteConfig.title} 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
          <div className="mt-4">
            <Link href="/contact" className="inline-block border border-primary rounded-full py-1 px-4 text-sm text-primary">
              Drop a line
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-500 mb-4">INFO</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-700 hover:text-primary transition">Courses</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-primary transition">Schedule</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-primary transition">Pricing</Link></li>
            <li><Link href="#" className="text-gray-700 hover:text-primary transition">Teachers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-500 mb-4">ABOUT</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-700 hover:text-primary transition">Blog</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-primary transition">About us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-500 mb-4">CONTACT US</h4>
          <ul className="space-y-2">
            <li className="text-gray-700">{siteConfig.footer.address}</li>
            <li className="text-gray-700">{siteConfig.footer.phone}</li>
            <li className="text-gray-700">{siteConfig.footer.email}</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">{siteConfig.footer.copyright}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href={siteConfig.social.instagram} className="text-gray-600 hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Link>
          <Link href={siteConfig.social.facebook} className="text-gray-600 hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;