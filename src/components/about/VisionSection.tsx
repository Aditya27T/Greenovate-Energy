import Image from 'next/image';

const VisionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 gradient-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block border-b-2 border-primary pb-2 mb-4">
            <h2 className="text-lg font-medium text-gray-600">Our Vision</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">Memimpin Transformasi Energi 
            <br className="hidden md:block" /> Menuju Masa Depan Berkelanjutan
          </h3>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
          Menjadi pemimpin nasional dalam pengembangan edukasi dan solusi inovatif di bidang energi terbarukan, untuk mendukung masa depan Indonesia yang hijau dan berdaya.          </p>
        </div>
        
        {/* Team Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full aspect-[7/5]">
              <Image 
                src="https://placehold.co/350x250/EEEEEE/3CB878?text=Team+1" 
                alt="Tim ahli Greenovate sedang merancang prototipe" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full aspect-[7/5]">
              <Image 
                src="https://placehold.co/350x250/EEEEEE/3CB878?text=Team+2" 
                alt="Tim ahli Greenovate sedang merancang prototipe"
 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full aspect-[7/5]">
              <Image 
                src="https://placehold.co/350x250/EEEEEE/3CB878?text=Team+3" 
                alt="Tim ahli Greenovate sedang merancang prototipe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;