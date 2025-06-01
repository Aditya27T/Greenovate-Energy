import Image from 'next/image';
import { services } from '@/data/services';

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Service</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <div className="relative w-10 h-10">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <div className="border-t border-gray-200 my-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;