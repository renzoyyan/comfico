import { Filter, ProductCard, Search } from '@/modules/product';
import { getCategories, getProducts } from '@/modules/product/services';
import { buttonVariants } from '@/shared/components/ui/button';
import { ROUTES } from '@/shared/constants/routes';
import { PageLayout } from '@/shared/layout';
import { cn } from '@/shared/utils/commons';
import Link from 'next/link';

const Shop = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = typeof searchParams?.page === 'string' ? searchParams?.page : 1;
  const search = typeof searchParams?.search === 'string' ? searchParams?.search : undefined;
  const min_price =
    typeof searchParams?.min_price === 'string' ? Number(searchParams.min_price) : 0;
  const max_price =
    typeof searchParams?.max_price === 'string' ? Number(searchParams.max_price) : 15000;
  const category_id =
    typeof searchParams?.category_id === 'string' ? searchParams?.category_id : 'all';

  const PARAMS = { min_price, max_price, category_id, page, search };

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
                <Search searchQuery={search} />
                <div
                  className={cn(
                    'flex items-center justify-end gap-x-2',
                    !products.nextPage && 'hidden'
                  )}
                >
                  <Link
                    href={{
                      pathname: ROUTES.SHOP,
                      query: {
                        ...(search ? { search } : {}),
                        page: products.prevPage,
                      },
                    }}
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                      className:
                        !products.prevPage && 'pointer-events-none border-gray-300 text-gray-300',
                    })}
                  >
                    Previous
                  </Link>
                  <Link
                    href={{
                      pathname: ROUTES.SHOP,
                      query: {
                        ...(search ? { search } : {}),
                        page: products.nextPage,
                      },
                    }}
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                      className:
                        !products.nextPage && 'pointer-events-none border-gray-300 text-gray-300',
                    })}
                  >
                    Next
                  </Link>
                </div>
              </div>
              <div className="grid gap-6  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {products.items.map(product => (
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
