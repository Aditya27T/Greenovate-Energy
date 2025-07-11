"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import { siteConfig } from "@/data/site"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    if (!mounted) return
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  // Handle click outside to close menu
  useEffect(() => {
    if (!mounted) return
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen, mounted])

  // Handle escape key to close menu
  useEffect(() => {
    if (!mounted) return
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu()
        buttonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen, mounted])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!mounted) return
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen, mounted])

  // Initial header styles (consistent for SSR and CSR)
  const headerClasses = `py-3 px-4 md:px-8 flex justify-between items-center transition-all duration-300 
    fixed top-0 left-0 right-0 w-full z-50 ${
      mounted && scrolled
        ? `bg-white/95 backdrop-blur-sm border-b border-gray-100 ${isMenuOpen ? "" : "shadow-lg"}`
        : "bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100"
    }`

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-[70px]" />

      <header className={headerClasses}>
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          onClick={closeMenu}
        >
          <div className="relative h-14 w-24 md:w-48">
            <Image
              src="/logo1.png"
              alt={siteConfig.title}
              fill
              sizes="(max-width: 768px) 96px, 192px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8">
          {siteConfig.navigation.map((item) => {
            const isActive = mounted ? pathname === item.path : false
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative py-2 text-base font-medium transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2
                  ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary 
                   transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
              }`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay & Full Height Menu - Only render when mounted */}
      {mounted && (
        <div
          className={`
            fixed inset-0 z-40 md:hidden
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          `}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />

          {/* Full Height Menu */}
          <nav
            ref={menuRef}
            id="mobile-menu"
            className={`
              absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            `}
            aria-label="Mobile navigation"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="relative h-10 w-32">
                <Image src="/logo1.png" alt={siteConfig.title} fill sizes="128px" className="object-contain" />
              </div>
              <button
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 
                   transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
                {siteConfig.navigation.map((item, index) => {
                  const isActive = pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeMenu}
                      className={`
                        block py-4 px-4 text-lg font-medium transition-all duration-200 rounded-xl
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                        transform transition-all duration-300
                        ${
                          isActive
                            ? "text-primary bg-primary/10 border-l-4 border-primary shadow-sm"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50 hover:translate-x-1"
                        }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                        transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                        opacity: isMenuOpen ? 1 : 0,
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        {isActive && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </span>
                    </Link>
                  )
                })}
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-sm text-gray-500 text-center">© 2024 {siteConfig.title}</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header