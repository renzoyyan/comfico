import Link from 'next/link';

import { ProductCard } from '@/modules/product';
import { getProducts } from '@/modules/product/services';
import { Button } from '@/shared/components/ui/button';
import { ROUTES } from '@/shared/constants/routes';

export const Products = async () => {
  const { data: products } = await getProducts({
    is_featured: false,
    per_page: 5,
  });

  return (
    <section>
      <div className="container py-36 ">
        <div className="mb-10 flex items-center">
          <h2 className="section-heading flex-1 text-4xl">More Selection</h2>
          <Link href={ROUTES.SHOP}>
            <Button variant={'outline'} size={'sm'}>
              View all
            </Button>
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-x-4 overflow-x-auto scrollbar-hide sm:grid-cols-3 sm:gap-y-16 lg:grid lg:grid-cols-4 xl:gap-y-28">
          {products?.items?.map(product => (
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
