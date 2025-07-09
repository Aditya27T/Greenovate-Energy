import Link from 'next/link';
import { Training } from '@/types';
import { siteConfig } from '@/data/site';


interface TrainingListProps {
    trainings: Training[];
}

const TrainingListSection = ({ trainings }: TrainingListProps) => {
    const adminWhatsappNumber = siteConfig.social.whatsapp.replace(/\D/g, '');

    return (
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Program Pelatihan & Sertifikasi
                    </h2>
                    <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                        Tingkatkan keahlian Anda di sektor energi terbarukan bersama para ahli.
                    </p>
                </div>

                {/* Daftar Pelatihan */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    {trainings.map((training) => {
                        // Pesan default untuk WhatsApp, URL-encoded
                        const message = encodeURIComponent(
                            `Halo, saya tertarik dengan program pelatihan "${training.title}". Mohon informasinya.`
                        );
                        const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminWhatsappNumber}&text=${message}`;

                        return (
                            <div
                                key={training.id}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 
                           flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                            >
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-primary mb-2">{training.title}</h3>
                                    <p className="text-gray-600 mb-4">{training.description}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                            Level: {training.level}
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                            Durasi: {training.duration}
                                        </span>
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                                            Untuk: {training.targetAudience}
                                        </span>
                                    </div>
                                </div>

                                {/* Bagian Kanan: Tombol Aksi */}
                                <div className="flex-shrink-0 mt-4 md:mt-0">
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md 
                               inline-flex items-center gap-2 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        Hubungi Admin
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrainingListSection;