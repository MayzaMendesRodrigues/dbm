export interface Product {
  images: Image[];
  product: {
    brand: string;
    color: string;
    cylinder: number;
    mileage: number;
    model: string;
    type: string;
    year: number;
  };
  salePrice: number;
}

export interface Image {
  id: number;
  primary: boolean;
  url: string;
}

export interface Bike {
  images: { url: string; primary?: boolean }[];
  product: {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    cylinder: number;
    type: string;
  };
  salePrice: number;
}

export interface Review {
  images: string[];
  published_at: number;
  rating: number;
  reviewer_name: string;
  reviewer_picture_url: string;
  text: string;
  title: string | null;
}

export { };

declare global {
  interface Window {
    goatcounter?: {
      count: (params: { path: string; title?: string }) => void;
    };
  }
}
