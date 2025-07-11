import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer, WhatsappButton } from '@/components/layout';
import { siteConfig } from '@/data/site';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'energi terbarukan',
    'panel surya',
    'mini hydro',
    'pelatihan energi hijau',
    'kit pembelajaran PicoHydro',
    'sertifikasi BNSP energi',
    'konsultasi energi bersih',
    'Indonesia renewable energy',
    'PicoHydro training Indonesia',
    'green energy solutions'
  ],
  authors: [{ name: 'PT. Greenovate Energy Solutions' }],
  creator: 'PT. Greenovate Energy Solutions',
  publisher: 'PT. Greenovate Energy Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: 'https://www.greenovateenergyslt.com/',
    siteName: siteConfig.title,
    images: [
      {
        url: 'https://www.greenovateenergyslt.com/logo1.png',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'in_ID',
    type: 'website',
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    card: 'summary_large_image',
    site: '@greenovateID',
    creator: '@greenovateID',
    images: ['https://www.greenovateenergyslt.com/logo1.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.greenovateenergyslt.com/',
    languages: {
      'en-US': 'https://www.greenovateenergyslt.com/',
      'in-ID': 'https://www.greenovateenergyslt.com/',
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT. Greenovate Energy Solutions',
    url: 'https://www.greenovateenergyslt.com/',
    logo: `https://www.greenovateenergyslt.com/logo1.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.footer.phone,
      contactType: 'Customer Service',
      email: siteConfig.footer.email,
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Malang',
        addressRegion: 'East Java',
        addressCountry: 'ID'
    },
    sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.whatsapp
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LocalBusinessSchema />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content="https://www.greenovateenergyslt.com/" />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:type" content="website" />
      </head>
      
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}