import Image from 'next/image';
import HeroImg from '@/shared/assets/images/hero-image.jpg';
import { Button } from '@/shared/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative lg:h-screen">
      <div className="mx-auto h-full max-w-[1530px] lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="items-center px-8 pb-24 pt-36 sm:pb-32 sm:pt-48 lg:col-span-7 lg:mr-4 lg:flex lg:h-full lg:px-0 lg:py-0 xl:col-span-6 xl:mr-0 xl:py-0">
          <div className="mx-auto max-w-[43rem] lg:mx-0">
            <h1 className="font-playfair-display text-4xl font-medium leading-snug sm:text-6xl xl:text-[5rem] xl:leading-[6rem]">
              Elevate Your Space with Timeless Style.
            </h1>

            <p className="my-8 text-base leading-[2rem] text-brand-2 sm:text-xl lg:max-w-[34rem]">
              Where Every Chair Becomes a Cozy Retreat, Transforming Your Space into a Haven of
              Relaxation and Serenity.
            </p>

            <Button size="lg">Buy now</Button>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="relative aspect-[3/2] w-full bg-gray-50 lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
            <Image src={HeroImg} fill alt="comfico" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
