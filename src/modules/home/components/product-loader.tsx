import { Skeleton } from '@/shared/components/ui/skeleton';

type Props = {
  length?: number;
};

export const ProductLoader = ({ length = 4 }: Props) => {
  return (
    <>
      {Array.from({ length }).map((product, idx) => (
        <Skeleton className="aspect-square h-full w-full bg-gray-100" key={idx} />
      ))}
    </>
  );
};
