'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { SideCart } from '@/modules/product';
import { navbarLinks } from '@/shared/constants/links';
import { ROUTES } from '@/shared/constants/routes';
import { useAuth } from '@/shared/hooks/use-auth';
import { cn } from '@/shared/utils/commons';
import { buttonVariants } from '../ui/button';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';
import { UserNav } from './user-nav';

export const Navbar = () => {
  const [offset, setOffset] = React.useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setOffset(true);
      } else setOffset(false);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full py-6 transition-all duration-300',
        offset ? 'mt-0 bg-white shadow-sm' : 'mt-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden sm:block sm:space-x-6 lg:space-x-14">
          {navbarLinks.map(item => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(pathname.includes(item.path) && 'font-semibold text-brand-2')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-x-3.5">
          <SideCart />

          {user ? (
            <UserNav user={user} />
          ) : (
            <Link
              href={ROUTES.LOGIN}
              className={buttonVariants({
                variant: 'outline',
                className: 'hidden !bg-transparent sm:inline-flex',
              })}
            >
              Sign in
            </Link>
          )}

          <MobileMenu user={user} pathname={pathname} />
        </div>

        {/* <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="icon-xs" />
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
                <Link href={ROUTES.CART} className="flex items-center gap-x-1.5">
                  <ShoppingCart className="icon-sm" />
                  <span>Cart</span>
                </Link>

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
        </div> */}
      </div>
    </header>
  );
};
