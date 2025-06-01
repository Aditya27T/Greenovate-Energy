import Image from 'next/image';

const MainContent = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="relative w-full aspect-[5/4]">
          <Image 
            src="/hero2.png" 
            alt="Renewable Energy Team" 
            fill
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div>
        <div className="border-l-2 border-primary pl-4 mb-6">
            <h2 className="text-lg font-medium text-gray-600">About Us</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">More About <br />PT. Greenovate Energy Solutions</h3>
          <p className="text-gray-700 leading-relaxed">
          PT. Greenovate Energy Solutions adalah perusahaan yang bergerak di bidang produksi perangkat pembelajaran, pelatihan bersertifikat, dan layanan konsultasi profesional dalam sektor energi terbarukan.                
          Berdiri atas semangat membangun masa depan yang berkelanjutan, kami menggabungkan teknologi hijau dengan pendekatan edukatif untuk mendorong transformasi energi di Indonesia.
          Kami percaya bahwa inovasi tidak hanya berasal dari teknologi, tetapi juga dari kesadaran, pendidikan, dan kemitraan. Dengan menyediakan kit pembelajaran interaktif, training berbasis sertifikasi nasional, serta konsultasi strategis, kami mendukung institusi pendidikan, industri, dan pemerintah dalam menciptakan ekosistem energi bersih yang adaptif dan inklusif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;