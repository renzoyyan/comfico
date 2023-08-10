import { PageLayout } from '@/shared/layout';
import { Skeleton } from '@/shared/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <PageLayout>
      <main className="container">
        <section className="py-48">
          <div className="grid gap-x-16 lg:grid-cols-2">
            <div>
              <Skeleton className="aspect-square w-full" />
              <div className="mt-6 grid grid-cols-4 gap-x-2">
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
                <Skeleton className="h-[150px] w-full" />
              </div>
            </div>
            <div>das</div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Loading;
