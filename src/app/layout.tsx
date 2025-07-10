import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer, WhatsappButton } from '@/components/layout';
import { siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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