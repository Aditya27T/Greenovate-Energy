export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'Picohydro' | 'Microhydro' | 'Edukit';
    images: {
      main: string;
      thumbnails: string[];
    };
    links: {
      tokopedia?: string;
      shopee?: string;
    };
    details: {
      specifications: string[];
      components: string[];
    };
    featured?: boolean;
  }
  
  export interface SimilarProduct {
    id: string;
    name: string;
    image: string;
  }