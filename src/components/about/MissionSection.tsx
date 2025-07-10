import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="relative w-full aspect-square">
          <Image 
            src="/about2.png" 
            alt="Tim Greenovate berkolaborasi merancang solusi energi bersih yang inovatif"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <div className="border-l-2 border-primary pl-4 mb-6">
            <h2 className="text-lg font-medium text-gray-600">Misi Kami</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Lima pilar utama yang menjadi landasan dalam mewujudkan transformasi energi berkelanjutan di Indonesia</h3>
          <ul className="list-disc text-gray-700 leading-relaxed pl-6 mb-6">
            <li><strong>Mengembangkan dan Memproduksi Perangkat Edukatif Energi Terbarukan:</strong> Mengembangkan dan memproduksi perangkat edukatif energi terbarukan yang aplikatif dan terjangkau.</li>
            <li><strong>Menyelenggarakan Pelatihan Bersertifikat:</strong> Menyelenggarakan pelatihan bersertifikat untuk meningkatkan kompetensi SDM dalam bidang energi terbarukan.</li>
            <li><strong>Menyediakan Layanan Konsultasi Teknis dan Strategis:</strong> Menyediakan layanan konsultasi teknis dan strategis bagi sektor publik dan swasta dalam implementasi teknologi hijau.</li>
            <li><strong>Mendorong Kolaborasi Lintas Sektor:</strong> Mendorong kolaborasi lintas sektor guna mempercepat transisi menuju energi bersih.</li>
            <li><strong>Membangun Kesadaran dan Budaya Keberlanjutan:</strong> Membangun kesadaran dan budaya keberlanjutan melalui pendekatan edukatif dan inovatif.</li>
          </ul>
          <div className="border-t-2 border-primary pt-6 mb-6">
            <h2 className="text-lg font-medium text-gray-600">Dampak Misi Kami</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Melalui implementasi misi ini, kami berkomitmen untuk menciptakan ekosistem pendidikan energi terbarukan yang komprehensif dan berkelanjutan di Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;