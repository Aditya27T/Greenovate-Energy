import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Produksi kit energi terbarukan',
    description: 'Desain dan pembuatan kit pembelajaran energi terbarukan',
    icon: 'https://img.icons8.com/fluency/48/solar-panel.png',
    url: '/products'
  },
  {
    id: '2',
    title: 'Pelatihan bersertifikat',
    description: 'Program pelatihan untuk peningkatan kompetensi di bidang energi terbarukan',
    icon: 'https://img.icons8.com/fluency/48/certificate.png',
    url: '/training'
  },
  {
    id: '3',
    title: 'Layanan konsultasi energi bersih',
    description: 'Konsultasi untuk implementasi proyek energi bersih yang efisien',
    icon: 'https://img.icons8.com/fluency/48/consultation.png',
    url: '/consultation'
  }
];