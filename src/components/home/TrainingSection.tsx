import Link from 'next/link';
import Image from 'next/image';

const TrainingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 gradient-bg">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Training</h2>
          <p className="text-gray-600 mb-6">
          Program pelatihan komprehensif untuk meningkatkan kompetensi SDM dalam bidang energi terbarukan dengan sertifikasi nasional          </p>
          <Link 
            href="#" 
            className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md inline-block transition"
          >
            Daftar Sekarang
          </Link>
        </div>
        <div className="relative w-full aspect-[5/4]">
          <Image 
            src="/train.png" 
            alt="Training Image" 
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;