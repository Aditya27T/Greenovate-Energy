import { Training } from "@/types"; 

export const trainingData: Training[] = [
  {
    id: 1,
    category: 'Energi & Lingkungan',
    title: 'Paket Praktis Pemula',
    description: 'Pengguna baru yang ingin tahu cara pakai dan pengenalan konsep energi & lingkungan.',
    price: 'Rp. 95.000',
    promoPrice: 'Rp. 45.000',
    facilities: [
      'E-modul',
      'E-sertifikat',
      'Kuis interaktif',
      'Aktivitas eco-game'
    ],
    materials: [
      'Apa itu PLTA Pikohidro & Mikrohidro',
      'Cara kerja sederhana',
      'Cara menyalakan dan mematikan sistem',
      'Panduan keamanan dasar'
    ]
  },
  {
    id: 2,
    category: 'Energi & Lingkungan',
    title: 'Paket Lengkap Pemula',
    description: 'Pemilik sistem pribadi di rumah/kebun.',
    price: 'Rp. 150.000',
    promoPrice: 'Rp. 100.000',
    facilities: [
      'Modul cetak & digital',
      'Video instalasi & maintenance',
      'Toolkit pengecekan ringan',
      'Grup WA diskusi'
    ],
    materials: [
      'Semua materi di Praktis Pemula',
      'Komponen sistem & fungsinya',
      'Instalasi dasar (air ke listrik)',
      'Perawatan ringan & pengecekan'
    ]
  },
  {
    id: 3,
    category: 'Energi & Lingkungan',
    title: 'Paket Masterclass Pengguna',
    description: 'Pengguna serius yang ingin paham teknis secara mendalam.',
    price: 'Rp. 900.000',
    promoPrice: 'Rp. 750.000',
    facilities: [
      'Semua fasilitas di Paket Lengkap Pemula',
      'Kelas online interaktif via zoom (3x pertemuan @ 90 menit)',
      'Konsultasi teknis 1 bulan',
      'E-Sertifikat & Sertifikat Cetak'
    ],
    materials: [
      'Semua materi di Paket Lengkap Pemula',
      'Prinsip kerja turbin & generator',
      'Panel kontrol & inverter',
      'Troubleshooting dasar',
      'Optimasi sistem'
    ]
  },
  {
    id: 4,
    category: 'Energi & Lingkungan',
    title: 'Paket Usaha & Komunitas',
    description: 'Kelompok tani, kelompok wisata, dan UMKM (maks 5 orang).',
    price: 'Rp. 2.500.000/kelompok',
    promoPrice: 'Rp. 1.500.000',
    facilities: [
      'Modul cetak & digital',
      'Video instalasi & maintenance',
      'Toolkit pengecekan ringan',
      'Grup WA diskusi'
    ],
    materials: [
      'Semua materi di Paket Masterclass',
      'Studi kasus lapangan',
      'Simulasi sistem modular',
      'Manajemen sharing daya komunitas'
    ]
  },
  {
    id: 5,
    category: 'Energi & Lingkungan',
    title: 'Paket Platinum (Custom Project)',
    description: 'Konsumen proyek atau instansi yang membutuhkan kustomisasi.',
    price: 'Rp. 6.500.000 - 15.000.000',
    promoPrice: 'Rp. 4.500.000 - 9.000.000',
    facilities: [
      'Kunjungan teknisi (jika tersedia)',
      'Pendampingan proyek 1x',
      'Sertifikat proyek',
      'Dukungan teknis 1 tahun'
    ],
    materials: [
      'Semua materi di Paket Usaha dan Komunitas',
      'Kustomisasi sistem sesuai lokasi',
      'Pelatihan operator lokal',
      'Rencana pemakaian jangka panjang'
    ]
  },
  {
    id: 6,
    category: 'Pemrograman',
    title: 'Training Pemrograman Dasar',
    description: 'Anak-anak jenjang SD, SMP (Beginner), SMA (Intermediate), dan Umum (Expert).',
    price: 'Rp. 150.000 - 200.000',
    promoPrice: 'Rp. 100.000 - 150.000',
    facilities: [
      'E-modul',
      'E-sertifikat',
      'Akses Zoom (3-4 sesi @90 menit)',
      'Latihan praktis interaktif'
    ],
    materials: [
      'Belajar logika dasar pemrograman menggunakan Scratch, Python, atau Arduino sesuai jenjang usia.'
    ]
  },
  {
    id: 7,
    category: 'Pemrograman',
    title: 'Training Pemrograman Web',
    description: 'Anak-anak jenjang SMP (Beginner), SMA-Kuliah (Intermediate), dan Umum (Expert).',
    price: 'Rp. 200.000 - 300.000',
    promoPrice: 'Rp. 150.000 - 250.000',
    facilities: [
      'E-modul',
      'E-sertifikat',
      'Akses LMS atau Zoom (4-6 sesi @90 menit)',
      'Proyek akhir & feedback mentor'
    ],
    materials: [
      'Pengenalan HTML, CSS, dan JavaScript dasar hingga pembuatan web sederhana untuk portofolio pemula.'
    ]
  }
];