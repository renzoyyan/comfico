import { PageLayout } from '@/shared/layout';
import { Skeleton } from '@/shared/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <PageLayout>
      <main className="container">
        <section className="py-48">
          <div className="grid gap-x-16 lg:grid-cols-3">
            <div>
              <Skeleton className="aspect-square w-full" />
              <div className="mt-6 grid grid-cols-4 gap-x-2">
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
              </div>
            </div>
            <div className="xl:col-span-2">
              <Skeleton className="mb-4 h-6 w-52" />
              <Skeleton className="mb-1 h-6 w-24" />
              <Skeleton className="h-6 w-24" />

              <div className="mt-5 max-w-3xl">
                <h2>Description:</h2>
                <div className="space-y-3">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-10/12" />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <Skeleton className="h-11 w-52 rounded-full" />
                <Skeleton className="h-11 w-52 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Loading;
