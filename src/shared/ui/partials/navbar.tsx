'use client';

import React from 'react';
import { Logo } from './logo';
import Link from 'next/link';

import { cn } from '@/shared/utils/commons';
import { Button } from '../button';
import { SideCart } from '@/modules/product';

export const Navbar = () => {
  const [offset, setOffset] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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

        <nav className="hidden space-x-14 lg:block">
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Collections</Link>
          <Link href={'/'}>Contact</Link>
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
