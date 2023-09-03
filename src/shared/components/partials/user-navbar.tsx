'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Logo } from './logo';

export const UserNavbar = () => {
  return (
    <header className="w-full border-b border-gray-300 py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />

          <nav className="flex items-center">
            <Link href={'/my-orders'} className={buttonVariants({ variant: 'ghost' })}>
              My orders
            </Link>
            <Link href={'/cart'} className={buttonVariants({ variant: 'ghost' })}>
              Cart
            </Link>
          </nav>
        </div>

        <Button variant={'ghost'} className="text-red-500" onClick={() => signOut()}>
          <LogOut className="icon-xs mr-2" />
          <span className="hidden sm:inline-block">Logout</span>
        </Button>
      </div>
    </header>
  );
};
