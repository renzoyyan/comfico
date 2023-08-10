'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

import { Logo } from './logo';
import { cn } from '@/shared/utils/commons';
import { Button } from '../button';
import { SideCart } from '@/modules/product';
import { navbarLinks } from '@/shared/constants/links';
import { ROUTES } from '@/shared/constants/routes';

export const Navbar = () => {
  const [offset, setOffset] = React.useState(false);
  const pathname = usePathname();

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
        <Link href={ROUTES.HOME}>
          <Logo />
        </Link>

        <nav className="hidden space-x-14 lg:block">
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

          {/* IF SIGNED IN */}
          {/* <div className="flex items-center gap-x-1.5">
            <User2 className="icon-sm" />
            <span>Account</span>
          </div> */}

          <Button variant={'outline'} className="bg-transparent">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};
