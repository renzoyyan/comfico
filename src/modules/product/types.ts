import { StaticImageData } from 'next/image';

export enum ProductCategory {
  SOFA = 'SOFA',
  CHAIR = 'CHAIR',
}

type Image = string | StaticImageData;

export type TProduct = {
  id: string;
  name: string;
  price: number;
  qty: number;
  stock: number;
  image: Image;
  subPhotos: Image[];
  category: ProductCategory;
  isFeatured: boolean;
  createdAt: Date;
};
