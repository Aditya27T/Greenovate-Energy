import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 about-gradient">
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[5/4]">
            <Image 
              src="/hero2.png" 
              alt="Greenovate Team" 
              fill
              className="rounded-lg shadow-md object-cover"
            />
            {/* Add the GREEN HEAT badge on the image for better integration */}
            <div className="absolute -bottom-5 -right-5 bg-primary rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold text-center">GREEN HEAT</span>
            </div>
          </div>
          <div>
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Membangun Masa Depan yang Berkelanjutan</h3>
            </div>
            <p className="text-gray-600 mb-4">
            PT. Greenovate Energy Solutions adalah perusahaan yang bergerak di bidang produksi perangkat pembelajaran, pelatihan bersertifikat, dan layanan konsultasi profesional dalam sektor energi terbarukan.
            </p>
            <p className="text-gray-600">
            Berdiri atas semangat membangun masa depan yang berkelanjutan, kami menggabungkan teknologi hijau dengan pendekatan edukatif untuk mendorong transformasi energi di Indonesia.            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-2 border-primary">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Energy Efficient</h4>
                  <p className="text-sm text-gray-600">Reduce energy consumption</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-2 border-primary">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Eco-friendly</h4>
                  <p className="text-sm text-gray-600">Sustainable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;