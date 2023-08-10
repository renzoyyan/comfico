import { ProductLoader } from '@/modules/home';
import { PageLayout } from '@/shared/layout';
import { Skeleton } from '@/shared/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <PageLayout>
      <main className="container">
        <section className="my-48">
          <div className="flex gap-8 ">
            <div className="hidden h-full max-w-[400px] flex-1 space-y-6 rounded-lg border bg-white p-8 lg:block">
              <div className="flex w-full items-center gap-6">
                <div className="flex-1">
                  <div className="mb-2 text-sm">Min price</div>
                  <Skeleton className="h-12 w-full" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 text-sm">Max price</div>
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
              <div>
                <h2 className="mb-4 font-medium">Category</h2>
                <div className="space-y-3">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
            </div>

            <div className="flex-[2] space-y-10">
              <div className="flex items-center gap-6 sm:grid sm:grid-cols-3">
                <div className="flex-grow sm:col-span-2">
                  <Skeleton className="h-12 w-full" />
                </div>

                <div className="justify-self-end lg:hidden">{/* <FilterPanel /> */}</div>
              </div>

              <div className="grid gap-6  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {/* {Array.from({ length: 6 }).map((product, idx) => (
                  <Skeleton className="aspect-square h-full w-full" key={idx} />
                ))} */}
                <ProductLoader length={6} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Loading;
