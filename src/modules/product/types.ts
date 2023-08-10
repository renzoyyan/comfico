import { StaticImageData } from 'next/image';

export enum ProductCategory {
  SOFA = 'SOFA',
  CHAIR = 'CHAIR',
}

// export type TProduct = {
//   id: string;
//   name: string;
//   price: number;
//   qty: number;
//   stock: number;
//   image: Image;
//   subPhotos: Image[];
//   category: ProductCategory;
//   isFeatured: boolean;
//   createdAt: Date;
// };

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  is_featured: boolean;
  short_description: string;
  long_description: string;
  created_at: string;
  updated_at: string;
  category_id: string;
  images: Image[];
  category: Category;
  qty: number;
}

export interface Image {
  id: string;
  product_id: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export type Category = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};
