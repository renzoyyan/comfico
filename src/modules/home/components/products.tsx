import { products } from '@/modules/product/constants';
import { Button } from '@/shared/ui/button';
import { ProductCard } from '@/modules/product';
import React from 'react';

export const Products = () => {
  const notFeatured = products.filter(prod => !prod.isFeatured);

  return (
    <section className="">
      <div className="container py-36 ">
        <div className="mb-10 flex items-center">
          <h2 className="section-heading flex-1 text-4xl">Chairs Selection</h2>
          <Button variant={'outline'} size={'sm'}>
            View all
          </Button>
        </div>

        <div className="hidden gap-x-4 gap-y-16 sm:grid-cols-3 lg:grid lg:grid-cols-4 xl:gap-y-28">
          {notFeatured.map(product => (
            <ProductCard
              variant={'outline'}
              key={product.id}
              product={product}
              className="w-[90%] sm:w-[310px] lg:w-[unset]"
            />
          ))}
        </div>

        <div className="flex snap-x snap-mandatory gap-x-4 overflow-x-auto scrollbar-hide sm:gap-x-6  lg:hidden">
          {notFeatured.slice(0, 4).map(product => (
            <ProductCard
              variant={'outline'}
              key={product.id}
              product={product}
              className="w-[90%] sm:w-[310px] lg:w-[unset]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
