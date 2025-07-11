// src/components/layout/LocalBusinessSchema.tsx
import { siteConfig } from '@/data/site';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://greenovate-energy.com/#organization",
    "name": "PT. Greenovate Energy Solutions",
    "alternateName": [
      "Greenovate Energy",
      "Greenovate Energy Solutions"
    ],
    "description": "Perusahaan penyedia kit pembelajaran energi terbarukan, pelatihan bersertifikat BNSP, dan layanan konsultasi profesional dalam sektor energi hijau di Indonesia. Spesialis dalam produksi alat pembelajaran mini hydro, solar panel, dan komponen energi terbarukan.",
    "url": "https://greenovate-energy.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://greenovate-energy.com/logo.png",
      "width": 300,
      "height": 100
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://greenovate-energy.com/assets/about-landing.jpeg",
        "width": 1200,
        "height": 800,
        "caption": "Tim ahli PT. Greenovate Energy Solutions"
      },
      {
        "@type": "ImageObject", 
        "url": "https://greenovate-energy.com/assets/landing-hero.jpeg",
        "width": 1200,
        "height": 800,
        "caption": "Produk kit energi terbarukan Greenovate"
      }
    ],
    
    // Informasi Kontak
    "telephone": "+62-812-3456-7890",
    "email": "hello@greenovate-energy.com",
    "faxNumber": "+62-341-123-4567",
    
    // Alamat Lengkap
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Malang No. 123",
      "addressLocality": "Malang",
      "addressRegion": "Jawa Timur",
      "postalCode": "65141",
      "addressCountry": {
        "@type": "Country",
        "name": "Indonesia",
        "alternateName": "ID"
      }
    },
    
    // Koordinat Lokasi
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.983908,
      "longitude": 112.621391
    },
    
    // Area Layanan
    "areaServed": [
      {
        "@type": "State",
        "name": "Jawa Timur"
      },
      {
        "@type": "Country", 
        "name": "Indonesia"
      }
    ],
    
    // Jam Operasional
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    
    // Informasi Bisnis
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "legalName": "PT. Greenovate Energy Solutions",
    "taxID": "ID-123456789", // Ganti dengan NPWP yang sebenarnya
    "vatID": "ID-123456789", // Ganti dengan nomor PKP jika ada
    
    // Kategori Bisnis
    "category": [
      "Renewable Energy Equipment Manufacturer",
      "Educational Equipment Supplier",
      "Energy Consulting Services",
      "Technical Training Provider"
    ],
    
    // Industri & Layanan
    "industry": "Renewable Energy",
    "naics": "221118", // Solar electric power generation
    "isicV4": "3510", // Electric power generation
    
    "serviceType": [
      "Kit Pembelajaran Energi Terbarukan",
      "Pelatihan Bersertifikat BNSP",
      "Konsultasi Energi Hijau",
      "Produksi Mini Hydro System",
      "Training Solar Panel"
    ],
    
    // Range Harga
    "priceRange": "Rp 50.000 - Rp 2.500.000",
    "paymentAccepted": [
      "Cash",
      "Credit Card", 
      "Bank Transfer",
      "E-Wallet"
    ],
    "currenciesAccepted": "IDR",
    
    // Social Media & Online Presence
    "sameAs": [
      "https://www.instagram.com/greenovate_energy",
      "https://www.facebook.com/greenovate.energy", 
      "https://www.linkedin.com/company/greenovate-energy",
      "https://www.youtube.com/@greenovateenergy",
      "https://www.tiktok.com/@greenovate_energy"
    ],
    
    // Rating & Review (jika sudah ada)
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    // Produk/Layanan Utama
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Katalog Produk Energi Terbarukan",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mini Hydro Horizontal System Kit",
            "description": "Kit lengkap pembangkit listrik tenaga air horizontal"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Mini Hydro Vertikal System Kit",
            "description": "Kit lengkap pembangkit listrik tenaga air vertikal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pelatihan Solar Panel Bersertifikat BNSP",
            "description": "Program pelatihan teknis panel surya dengan sertifikasi nasional"
          }
        }
      ]
    },
    
    // Sertifikasi & Akreditasi
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Badan Nasional Sertifikasi Profesi (BNSP)"
        }
      }
    ],
    
    // Kontak untuk Berbagai Layanan
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+62-812-3456-7890",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["Indonesian", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+62-812-3456-7891", 
        "contactType": "sales",
        "areaServed": "ID",
        "availableLanguage": "Indonesian"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+62-812-3456-7892",
        "contactType": "technical support", 
        "areaServed": "ID",
        "availableLanguage": ["Indonesian", "English"]
      }
    ],
    
    // Kemitraan & Afiliasi
    // "member": [
    //   {
    //     "@type": "Organization",
    //     "name": "Asosiasi Energi Terbarukan Indonesia (AETI)"
    //   },
    //   {
    //     "@type": "Organization", 
    //     "name": "Indonesia Solar Energy Association (ISEA)"
    //   }
    // ],
    
    // Penghargaan (jika ada)
    "award": [
      "Best Innovation in Renewable Energy Education 2023",
      "Top SME Energy Sector East Java 2024"
    ],
    
    // Target Audience
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "Educational Institutions",
        "Research Centers", 
        "SME Businesses",
        "Government Agencies",
        "Students",
        "Professionals"
      ]
    },
    
    // Informasi Tambahan
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Business License",
        "value": "NIB-1234567890123456" 
      },
      {
        "@type": "PropertyValue",
        "name": "ISO Certification",
        "value": "ISO" 
      }
    ],
    
    // Lokasi Spesifik untuk Map
    "hasMap": `https://www.google.com/maps/search/?api=1&query=-7.983908,112.621391`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default LocalBusinessSchema;