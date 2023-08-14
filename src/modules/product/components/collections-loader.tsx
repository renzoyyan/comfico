import { Skeleton } from '@/shared/components/ui/skeleton';
import React from 'react';

export const CollectionsLoader = () => {
  return (
    <div className="grid gap-6  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((product, idx) => (
        <Skeleton className="aspect-square h-full w-full" key={idx} />
      ))}
    </div>
  );
};
