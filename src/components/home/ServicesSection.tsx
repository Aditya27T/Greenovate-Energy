// ver 1
// import Image from 'next/image';
// import { services } from '@/data/services';
// import Link from 'next/link';

// const ServicesSection = () => {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-gray-50">
//       <div className="container mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Service</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <Link
//               key={service.id}
//               href={service.url || `/services/${service.id}`}
//               className="block"
//             >
//               <div className="bg-white p-6 rounded-lg shadow-md text-center h-full transition-transform hover:scale-105">
//                 <div className="bg-gray-200 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
//                   <div className="relative w-10 h-10">
//                     <Image 
//                       src={service.icon}
//                       alt={service.title} 
//                       fill
//                       className="object-contain"
//                       unoptimized
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


// ver 2
// import Image from 'next/image';
// import { services } from '@/data/services';
// import Link from 'next/link';

// const ServicesSection = () => {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-gray-50">
//       <div className="container mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Service</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div 
//               key={service.id} 
//               className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col"
//             >
//               <div className="bg-gray-200 w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
//                 <div className="relative w-10 h-10">
//                   <Image 
//                     src={service.icon}
//                     alt={service.title} 
//                     fill
//                     className="object-contain"
//                     unoptimized
//                   />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
//               <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
//               <div className="mt-auto">
//                 <Link
//                   href={service.url || `/services/${service.id}`}
//                   className="inline-block bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// ver 3

import Image from 'next/image';
import { services } from '@/data/services';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Layanan Unggulan Kami</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Solusi yang kami rancang untuk mendorong pertumbuhan dan kesuksesan bisnis Anda.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.url || `/services/${service.id}`}
              aria-label={`Pelajari lebih lanjut tentang ${service.title}`} // Penting untuk aksesibilitas
              className="group block rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <div 
                className="bg-white rounded-lg shadow-md h-full p-8 flex flex-col text-center
                           transition-all duration-300 ease-in-out 
                           group-hover:shadow-xl group-hover:-translate-y-2"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <div className="relative w-9 h-9">
                    <Image
                      src={service.icon}
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                <div className="mt-auto">
                  <span className="inline-flex items-center font-semibold text-primary">
                    Pelajari Selengkapnya
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;