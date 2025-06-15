import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 px-6 md:px-12 lg:px-24">
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 py-16 md:py-24">
      {/* Image - Now appears first on mobile */}
      <div className="flex items-center justify-center md:order-2">
        <div className="relative w-full aspect-[4/3] max-w-lg">
          <Image
            src="/assets/landing-hero.jpeg"
            alt="Energy professionals working with renewable energy solutions"
            fill
            className="rounded-tl-[96px] rounded-br-[96px] object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Content - Now appears second on mobile */}
      <div className="space-y-6 md:order-1">
        <p className="text-sm text-gray-700 font-medium">PT. Greenovate Energy Solutions</p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 uppercase leading-tight">
          Empowering Education and Innovation Through Clean Energy
        </h1>

        <p className="text-gray-600 font-medium leading-relaxed">
          Menggabungkan teknologi hijau dengan pendekatan edukatif untuk mendorong transformasi energi di Indonesia
          melalui perangkat pembelajaran, pelatihan bersertifikat, dan layanan konsultasi profesional dalam sektor
          energi terbarukan.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/products"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Explore Now
          </Link>
          <Link
            href="/about"
            className="text-gray-800 font-bold py-3 px-6 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;