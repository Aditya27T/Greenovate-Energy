import Image from 'next/image';

const MainContent = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="relative w-full aspect-[5/4]">
          <Image 
            src="/api/placeholder/500/400" 
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
                Membangun masa depan yang berkelanjutan melalui inovasi teknologi hijau, pendidikan berkualitas, dan kemitraan strategis dalam sektor energi terbarukan          
              </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;