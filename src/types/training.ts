export interface Training {
    id: string | number;
    category: 'Energi & Lingkungan' | 'Pemrograman';
    title: string;
    description: string; 
    price: string;
    promoPrice?: string;
    facilities: string[];
    materials: string[];
  };