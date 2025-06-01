import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-gradient px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 py-16 md:py-6">
        <div className="text-left">
          <p className="text-sm text-gray-700 mb-2 font-medium"> PT. Greenovate Energy Solutions</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-800 uppercase leading-tight">EMPOWERING EDUCATION AND INNOVATION THROUGH CLEAN ENERGY</h1>
          <p className="text-gray-600 mb-8 opacity-75 font-medium">Menggabungkan teknologi hijau dengan pendekatan edukatif untuk mendorong transformasi energi di Indonesia melalui perangkat pembelajaran, pelatihan bersertifikat, dan layanan konsultasi profesional dalam sektor energi terbarukan.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition flex items-center justify-center">
              Explore Now
            </Link>
            <Link href="/about" className="text-gray-800 font-bold py-3 px-6 hover:bg-gray-100 transition">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]">
            <Image
              src="/hero2.png"
              alt="Energy professionals"
              fill
              className="rounded-tl-[96px] rounded-br-[96px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;