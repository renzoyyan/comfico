import { Skeleton } from '@/shared/components/ui/skeleton';
import { ProductLoader } from './product-loader';

export const FeaturedLoader = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 -z-10 hidden h-full w-1/2 bg-secondary sm:block" />
      <div className="container flex h-full flex-1 flex-col justify-center py-36 sm:py-56 lg:py-96">
        <h2 className="section-heading">Featured Products</h2>

        <div className="mt-12">
          <div className="flex gap-x-4 overflow-x-auto scrollbar-hide sm:gap-x-6 lg:grid lg:grid-cols-4">
            <ProductLoader />
          </div>
        </div>
      </div>
    </section>
  );
};
