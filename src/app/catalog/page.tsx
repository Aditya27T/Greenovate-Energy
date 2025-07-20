'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CatalogContent = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const shouldDownload = searchParams?.get('download') === 'true';

  const pdfPath = '/assets/catalog-greenovate-2025.pdf';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (shouldDownload) {
      handleDownload();
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [shouldDownload, mounted]);

  const handleDownload = () => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Katalog-Greenovate-Energy-Solutions-2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfError = () => {
    setPdfError(true);
    setIsLoading(false);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Memuat Katalog...</h2>
          <p className="text-gray-600">Mohon tunggu sebentar</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Memuat Katalog PDF...</h2>
          <p className="text-gray-600">Mohon tunggu sebentar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-[70px] z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Kembali ke Beranda
              </Link>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <h1 className="text-xl font-bold text-gray-800">Katalog Produk 2025</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                title="Download PDF"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">Download</span>
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors"
                title="Hubungi Kami"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="hidden sm:inline">Hubungi Kami</span>
                <span className="sm:hidden">Kontak</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* PDF Info Header */}
          <div className="bg-gray-100 px-6 py-4 border-b">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src="/Logo.png"
                    alt="Greenovate Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">PT. Greenovate Energy Solutions</h2>
                  <p className="text-sm text-gray-600">Katalog Produk Energi Terbarukan 2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Format: PDF</p>
                <p className="text-sm text-gray-600">Edisi: 2025</p>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="relative">
            {pdfError ? (
              // Error fallback
              <div className="h-96 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 mx-6 my-6 rounded-lg">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">PDF Tidak Dapat Dimuat</h3>
                <p className="text-gray-500 mb-4 text-center max-w-md">
                  Maaf, file PDF katalog tidak dapat ditampilkan di browser ini. 
                  Silakan download file untuk melihat katalog lengkap.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownload}
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Download PDF
                  </button>
                  <Link
                    href="/products"
                    className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-lg transition-colors text-center"
                  >
                    Lihat Produk Online
                  </Link>
                </div>
              </div>
            ) : (
              // PDF Viewer
              <div className="relative w-full">
                <iframe
                  src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                  className="w-full h-[80vh] min-h-[600px]"
                  title="Katalog Produk Greenovate Energy Solutions 2025"
                  onError={handlePdfError}
                  onLoad={() => setIsLoading(false)}
                  style={{ border: 'none' }}
                />
                
                {/* Overlay untuk browser yang tidak support PDF viewer */}
                <div className="absolute inset-0 bg-gray-50 hidden" id="pdf-fallback">
                  <div className="h-full flex flex-col items-center justify-center p-6">
                    <svg className="w-20 h-20 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Katalog Produk 2025</h3>
                    <p className="text-gray-600 mb-6 text-center max-w-md">
                      Browser Anda tidak mendukung tampilan PDF inline. 
                      Silakan download file katalog untuk melihat seluruh produk kami.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleDownload}
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
                      >
                        Download Katalog PDF
                      </button>
                      <Link
                        href="/products"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                      >
                        Lihat Produk Online
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>📄 Katalog Lengkap</span>
                <span>•</span>
                <span>50+ Produk</span>
                <span>•</span>
                <span>Spesifikasi Detail</span>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href="/products"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Lihat Produk Online
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Butuh Bantuan Memilih Produk?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih solusi energi terbarukan yang tepat 
              untuk kebutuhan spesifik Anda. Konsultasi gratis dan tanpa komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Konsultasi Gratis
              </Link>
              <Link
                href="/training"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Lihat Program Pelatihan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CatalogLoading = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Memuat Katalog PDF...</h2>
      <p className="text-gray-600">Mohon tunggu sebentar</p>
    </div>
  </div>
);

const CatalogPage = () => {
  return (
    <Suspense fallback={<CatalogLoading />}>
      <CatalogContent />
    </Suspense>
  );
};

export default CatalogPage;