import { BannerSection, ContactForm, Map } from '@/components/contact';
import SimpleMap from '@/components/contact/SimpleMap';

export default function ContactPage() {
  return (
    <>
      <BannerSection title="CONTACT" />
      
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Map */}
          <div className="h-[400px] w-full">
            <SimpleMap />
          </div>
        </div>
      </section>
    </>
  );
}