import { Filter, ProductCard } from '@/modules/product';
import { getCategories, getProducts } from '@/modules/product/services';
import { PageLayout } from '@/shared/layout';
import { Input } from '@/shared/ui/input';

export const revalidate = 300;

const Shop = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const min_price = searchParams?.min_price ? Number(searchParams.min_price) : 0;
  const max_price = searchParams?.max_price ? Number(searchParams.max_price) : 15000;
  const category_id = searchParams?.category_id ? searchParams?.category_id : 'all';
  const PARAMS = { min_price, max_price, category_id };

  const { data: products } = await getProducts(PARAMS);
  const { data: categories } = await getCategories();

  return (
    <PageLayout>
      <main className="container">
        <section className="my-48">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="h-full max-w-[400px] flex-1 space-y-6 rounded-lg border bg-white p-8">
              <Filter categories={categories} />
            </div>

            <div className="flex-[2] space-y-10">
              <div className="flex items-center gap-6 sm:grid sm:grid-cols-3">
                <div className="flex-grow sm:col-span-2">
                  <Input placeholder="Search products" />
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
