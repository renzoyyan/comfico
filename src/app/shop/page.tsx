import { Filter, FilterPanel, ProductCard } from '@/modules/product';
import { products } from '@/modules/product/constants';
import { PageLayout } from '@/shared/layout';
import { Input } from '@/shared/ui/input';

const Shop = () => {
  return (
    <PageLayout>
      <main className="container">
        <section className="my-48">
          <div className="flex gap-8 ">
            <div className="hidden h-full max-w-[400px] flex-1 space-y-6 rounded-lg border bg-white p-8 lg:block">
              <Filter />
            </div>

            <div className="flex-[2] space-y-10">
              <div className="flex items-center gap-6 sm:grid sm:grid-cols-3">
                <div className="flex-grow sm:col-span-2">
                  <Input placeholder="Search products" />
                </div>

                <div className="justify-self-end lg:hidden">
                  <FilterPanel />
                </div>
              </div>
              <div className="grid gap-6  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {products.map(product => (
                  <ProductCard variant={'outline'} key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Shop;
