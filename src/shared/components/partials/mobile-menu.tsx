import { navbarLinks } from '@/shared/constants/links';
import { ROUTES } from '@/shared/constants/routes';
import { cn } from '@/shared/utils/commons';
import { Menu } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

type Props = {
  user?: Session['user'];
  pathname: string;
};

export const MobileMenu = ({ user, pathname }: Props) => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="my-2">
          <Menu className="icon-sm" />
        </SheetTrigger>
        <SheetContent className="w-[280px] pt-16">
          <div className="flex flex-col gap-y-4">
            {navbarLinks.map(item => (
              <Link href={item.href} key={item.label}>
                <span
                  className={cn(
                    'text-xl',
                    pathname.includes(item.path) && 'font-semibold text-brand-2'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-y-5 text-xl">
            {user ? (
              <Link href={ROUTES.MY_ORDERS}>My orders</Link>
            ) : (
              <Link href={ROUTES.LOGIN} className={buttonVariants()}>
                Sign in
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
