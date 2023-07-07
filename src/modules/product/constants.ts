import { ProductCategory, TProduct } from './types';
import { faker } from '@faker-js/faker';
import GraySofa from '@/shared/assets/images/sofa-gray.jpg';
import GreenSofa from '@/shared/assets/images/sofa-green.jpg';
import BlackChair from '@/shared/assets/images/black-chair.jpg';
import DarkGreenChair from '@/shared/assets/images/chair-dg.jpg';
import GrayChair from '@/shared/assets/images/chair-gray.jpg';
import OfficeChair from '@/shared/assets/images/office-chair.jpg';
import WhiteChair2 from '@/shared/assets/images/white-chair-2.jpg';
import WhiteChair from '@/shared/assets/images/white-chair.jpg';
import WoodenChair from '@/shared/assets/images/wooden-chair.jpg';

// SUB PHOTOS
import GraySofaSub from '@/shared/assets/images/sub-photos/sofa-gray.jpg';
import GraySofaSub2 from '@/shared/assets/images/sub-photos/sofa-gray-1.jpg';

export const products = [
  {
    id: faker.string.uuid(),
    name: 'Comfort Cove',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: GraySofa,
    subPhotos: [GraySofaSub, GraySofaSub2],
    category: ProductCategory.SOFA,
    isFeatured: true,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Zenith Lounge',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: BlackChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: true,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Bliss Haven',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: GreenSofa,
    subPhotos: [],
    category: ProductCategory.SOFA,
    isFeatured: true,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Sooth Ease',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: DarkGreenChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: true,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Cozy Retreat',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: GrayChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: false,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Chic Sway',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: OfficeChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: false,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Wooden Trip',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: WoodenChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: false,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Cloud Comfort',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: WhiteChair2,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: false,
    createdAt: faker.date.recent(),
  },
  {
    id: faker.string.uuid(),
    name: 'Radiant Relax',
    price: Number(faker.commerce.price({ min: 1000, max: 5000 })),
    stock: Math.floor(Math.random() * 100),
    qty: 0,
    image: WhiteChair,
    subPhotos: [],
    category: ProductCategory.CHAIR,
    isFeatured: false,
    createdAt: faker.date.recent(),
  },
] satisfies TProduct[];
