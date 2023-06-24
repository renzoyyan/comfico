import { Armchair, Award, ShieldCheck, Truck } from 'lucide-react';

export const services = [
  {
    label: 'Fast & Free Shipping',
    icon: Truck,
    description: 'Enjoy lightning-fast delivery with our complimentary shipping service.',
  },
  {
    label: 'Timeless Quality',
    icon: Award,
    description: 'We offer timeless quality - crafted to perfection, built to inspire.',
  },
  {
    label: 'Stylish and Durable',
    icon: Armchair,
    description: 'Sleek designs built to last - where style meets durability.',
  },
  {
    label: 'Satisfaction Guaranteed',
    icon: ShieldCheck,
    description: 'Experience worry-free shopping - satisfaction guaranteed for your peace of mind.',
  },
] as const;
