import Link from 'next/link';
import { Training } from '@/types';
import { siteConfig } from '@/data/site';
import { CheckCircle, Tag, BookOpen, MessageCircle } from 'lucide-react';

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
                    <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
                        Tingkatkan keahlian Anda di sektor energi terbarukan dan pemrograman bersama para ahli. Semua promo berlaku hingga akhir tahun 2025.
                    </p>
                </div>

                {/* Daftar Pelatihan */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {trainings.map((training) => {
                        const message = encodeURIComponent(
                            `Halo, saya tertarik dengan program pelatihan "${training.title}". Mohon informasinya.`
                        );
                        const whatsappUrl = `https://api.whatsapp.com/send?phone=${adminWhatsappNumber}&text=${message}`;

                        return (
                            <div
                                key={training.id}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden transition-shadow hover:shadow-2xl"
                            >
                                {/* Header Kartu */}
                                <div className="p-6 bg-gray-50 border-b">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                                        training.category === 'Pemrograman' 
                                        ? 'bg-blue-100 text-blue-800' 
                                        : 'bg-green-100 text-green-800'
                                    }`}>
                                        {training.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-2">{training.title}</h3>
                                    <p className="text-gray-600 mt-1">{training.description}</p>
                                </div>

                                {/* Isi Kartu */}
                                <div className="p-6 flex-grow space-y-6">
                                    {/* Harga */}
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center"><Tag className="w-4 h-4 mr-2"/>Harga</h4>
                                        <div className="flex items-baseline space-x-3">
                                            {training.promoPrice && (
                                                <span className="text-2xl font-bold text-red-600">{training.promoPrice}</span>
                                            )}
                                            <span className={`text-lg ${training.promoPrice ? 'text-gray-500 line-through' : 'text-gray-800 font-semibold'}`}>
                                                {training.price}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Fasilitas */}
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center"><CheckCircle className="w-4 h-4 mr-2"/>Fasilitas</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            {training.facilities.map((facility, index) => (
                                                <li key={index} className="flex items-center">
                                                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0"/>
                                                    <span>{facility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Materi */}
                                    <div>
                                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center"><BookOpen className="w-4 h-4 mr-2"/>Materi</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            {training.materials.map((material, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2 mt-1">•</span>
                                                    <span>{material}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer Kartu (Tombol Aksi) */}
                                <div className="p-6 bg-gray-50 mt-auto">
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg 
                                        w-full inline-flex items-center justify-center gap-2 transition-transform hover:scale-105"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Daftar via WhatsApp
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