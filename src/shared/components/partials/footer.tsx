import React from 'react';
import { Logo } from './logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-brand-2 py-36 lg:pt-56">
      <div className="container">
        <div className="grid gap-y-12 lg:grid-cols-2">
          <div>
            <Logo className="text-5xl text-white" />
            <p className="mt-6 text-[#D9D9D9] sm:w-96">
              Immerse Yourself in the World of Stylish Seating, Crafted to Perfection for the
              Discerning Interior Enthusiast.
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <Facebook className="icon-default text-white" />
              <Twitter className="icon-default text-white" />
              <Instagram className="icon-default text-white" />
            </div>
          </div>

          <div className="grid gap-y-8 text-white lg:grid-cols-3">
            <div>
              <h3 className="mb-4 uppercase">Shop</h3>
              <div className="flex flex-col gap-y-6">
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 uppercase">Collections</h3>
              <div className="flex flex-col gap-y-6">
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 uppercase">support</h3>
              <div className="flex flex-col gap-y-6">
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
                <Link href={'#'}>Lorem ipsum</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 text-center">
          <hr className="h-px w-full text-[#614E39]" />
          <p className="pt-11 text-xs text-[#ABABAB]">
            Copyright © 2023 Renz Vallinas. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
