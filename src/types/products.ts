export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: {
      main: string;
      thumbnails: string[];
    };
    links: {
      tokopedia?: string;
      shopee?: string;
    };
    featured?: boolean;
  }
  
  export interface SimilarProduct {
    id: string;
    name: string;
    image: string;
  }