import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/utils/commons';
import Link from 'next/link';

type Props = {
  className?: string;
};

export const Logo = (props: Props) => {
  return (
    <div className={cn('text-xl font-bold text-brand-1 sm:text-2xl', props.className)}>
      <Link href={ROUTES.HOME}>comfico</Link>
    </div>
  );
};
