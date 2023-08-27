import { Skeleton } from '@/shared/components/ui/skeleton';

type Props = {
  length?: number;
};

export const ProductLoader = ({ length = 4 }: Props) => {
  return (
    <>
      {Array.from({ length }).map((product, idx) => (
        <div key={idx}>
          <Skeleton className="aspect-square h-full w-full bg-gray-100" />

          <div className="mt-4">
            <div className="flex items-center justify-between gap-x-6">
              <Skeleton className="h-6 flex-1 bg-gray-100" />
              <Skeleton className="h-6 w-16 bg-gray-100" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
