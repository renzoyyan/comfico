import React from 'react';
import { Logo } from './logo';
import Link from 'next/link';
import { ShoppingCart, User2 } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 mt-10 w-full">
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden space-x-14 lg:block">
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Collections</Link>
          <Link href={'/'}>Contact</Link>
        </nav>

        <div className="flex items-center gap-x-3.5">
          <div className="flex items-center gap-x-1.5">
            <ShoppingCart className="icon-sm" />
            <span>Cart</span>
          </div>
          <div className="flex items-center gap-x-1.5">
            <User2 className="icon-sm" />
            <span>Account</span>
          </div>
        </div>
      </div>
    </header>
  );
};
