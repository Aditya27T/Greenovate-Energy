'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent hydration errors by waiting for client-side mount
  if (!mounted) {
    return (
      <header className="py-3 px-4 md:px-8 flex justify-between items-center fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
        <div className="w-48 h-14"></div>
        <div className="hidden md:block"></div>
        <div className="md:hidden w-10 h-10"></div>
      </header>
    );
  }

  return (
    <>
      {/* Spacer div to prevent content jump when header becomes fixed */}
      <div className="h-[70px]"></div>
      
      <header 
        className={`py-3 px-4 md:px-8 flex justify-between items-center transition-all duration-300 
        fixed top-0 left-0 right-0 w-full z-50
        ${scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100'}`}
      >
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-48">
            {/* Add width and height props to the Image component */}
            <Image 
              src="/logo1.png"
              alt={siteConfig.title}
              fill
              sizes="(max-width: 768px) 192px, 192px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
        
        <nav className={`
          ${isMenuOpen 
            ? 'flex flex-col absolute top-20 right-0 bg-white p-4 shadow-md z-50 w-full md:w-auto' 
            : 'hidden'} 
          md:flex md:space-x-8 md:static md:shadow-none md:p-0 md:flex-row
          ${scrolled ? 'md:bg-transparent' : ''}`}
        >
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`
                  py-2 md:py-0 text-base font-medium transition-colors duration-200
                  ${isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-800 hover:text-primary'}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;