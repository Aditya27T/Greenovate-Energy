import { BannerSection, ContactForm } from '@/components/contact';
import SimpleMap from '@/components/contact/SimpleMap';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Banner Section */}
      <BannerSection title="CONTACT" />

      {/* Main Contact Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 md:grid-cols-2 items-start">

          {/* Contact Form */}
          <div className="space-y-6 bg-white md:flex-1 w-full p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="relative md:flex-1 w-full py-4 rounded-lg overflow-hidden shadow-lg">
            <SimpleMap />
            <div className=" absolute w-full bottom-0 h-16 z-10 bg-white">
              <div className="flex items-center gap-3 px-4 py-3 h-full">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Explore nearby locations</p>
                  <p className="text-xs text-gray-500 truncate">Interactive map with points of interest and navigation</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
