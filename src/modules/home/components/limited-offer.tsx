import React from 'react';
import YellowChair from '@/shared/assets/images/yellow-chair.png';
import Image from 'next/image';
import { Button } from '@/shared/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const LimitedOffer = () => {
  return (
    <section className="container  bg-brand-2 lg:h-[750px] lg:max-w-none lg:px-0">
      <div className="grid h-full items-center gap-x-12 text-white lg:grid-cols-2 xl:gap-x-28">
        <div className="relative hidden h-full w-full lg:block">
          <Image
            src={YellowChair}
            alt="Yellow Chair"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-[50px] py-36">
          <div>
            <h4 className="text-lg font-medium tracking-wider sm:text-xl">LIMITED OFFER</h4>
            <hr className="h-[2px] w-[110px] bg-white" />
          </div>
          <h2 className="max-w-2xl font-playfair-display text-4xl font-bold leading-snug sm:text-5xl md:leading-[4rem]">
            Get 15% Off on Stylish Chairs - Elevate Your Seating Experience Today!
          </h2>
          <Button className="group bg-white font-semibold text-brand-1" size={'lg'}>
            <span className="group-hover:text-white">Grab it now</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-1 group-hover:text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
