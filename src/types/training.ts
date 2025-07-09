export interface Training {
    id: string | number;
    title: string;
    description: string;
    level: 'Pemula' | 'Menengah' | 'Profesional';
    duration: string;
    targetAudience: string; 
  };