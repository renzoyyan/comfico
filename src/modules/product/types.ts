import { StaticImageData } from 'next/image';

export enum ProductCategory {
  SOFA = 'SOFA',
  CHAIR = 'CHAIR',
}

export type TProduct = {
  id: string;
  name: string;
  price: number;
  qty: number;
  stock: number;
  image: string | StaticImageData;
  category: ProductCategory;
  isFeatured: boolean;
  createdAt: Date;
};
