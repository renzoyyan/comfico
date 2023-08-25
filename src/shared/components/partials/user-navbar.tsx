'use client';

import React from 'react';
import { Logo } from './logo';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export const UserNavbar = () => {
  return (
    <header className="w-full border-b border-gray-300 py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />

          <nav className="flex items-center gap-x-2">
            <Link href={'/my-orders'}>
              <Button variant={'ghost'} className="text-base">
                My orders
              </Button>
            </Link>
            <Link href={'/cart'}>
              <Button variant={'ghost'} className="text-base">
                Cart
              </Button>
            </Link>
          </nav>
        </div>

        <Button variant={'ghost'} className="text-red-500" onClick={() => signOut()}>
          <LogOut className="icon-xs mr-2" />
          Logout
        </Button>
      </div>
    </header>
  );
};
