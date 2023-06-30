'use client';
import { ShoppingBag, ShoppingCart, X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { Button, buttonVariants } from '@/shared/ui/button';
import { CartProduct } from './cart-product';
import { useCartStore } from '@/shared/store/cart';
import Link from 'next/link';
import { useStore } from '@/shared/hooks/use-store';

export const SideCart = () => {
  const store = useStore(useCartStore, state => state);

  if (!store?._hasHydrated) {
    return null;
  }

  const amountWithoutTax = store.products.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  const totalAmount = (amountWithoutTax + +taxAmount).toFixed(2);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div role="button" className="flex items-center gap-x-1.5">
          <div className="relative">
            {store?.totalProducts > 0 ? (
              <div className="absolute -right-[5px] -top-[5px] grid h-4 w-4 place-content-center rounded-full bg-red-500 text-center text-xs text-white">
                {store?.totalProducts}
              </div>
            ) : null}
            <ShoppingCart className="icon-sm" />
          </div>
          <span>Cart</span>
        </div>
      </SheetTrigger>
      <SheetContent withOverlay={false} hideCloseBtn className="w-full px-0 lg:max-w-md">
        <SheetHeader className="mb-4 flex flex-row items-center justify-between px-6">
          <SheetTitle>Your Cart</SheetTitle>
          <SheetClose asChild>
            <Button variant={'ghost'} size={'icon'} className="!mt-0">
              <X className="icon-default text-gray-600" />
            </Button>
          </SheetClose>
        </SheetHeader>

        {/* CART PRODUCTS */}
        <div className="space-y-4 px-6">
          {store?.products?.length > 0 ? (
            store?.products.map(product => <CartProduct key={product.id} product={product} />)
          ) : (
            <div className=" grid h-screen place-content-center gap-y-4 text-center text-brand-1">
              <ShoppingBag className="mx-auto h-8 w-8" />
              <h3 className="text-xl font-medium">Your cart is empty</h3>

              <SheetClose asChild>
                <Link
                  href="#"
                  className={buttonVariants({ variant: 'outline', size: 'lg', className: 'mb-36' })}
                >
                  Start shopping
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
        {/* END CART PRODUCTS */}

        {store?.products.length > 0 && (
          <SheetFooter className="mt-10 sm:flex-col">
            <div className="text-sm">
              <hr className="h-px w-full text-gray-100" />
              <div className="flex items-center px-6 py-4 font-light text-gray-400">
                <h4 className="flex-1">Subtotal</h4>
                <h4 className="font-medium text-black">₱{amountWithoutTax.toFixed(2)}</h4>
              </div>
              <div className="flex items-center px-6 py-4 font-light text-gray-400">
                <h4 className="flex-1">Shipping</h4>
                <h4 className="font-medium">--</h4>
              </div>
              <div className="flex items-center px-6 py-4 font-light text-gray-400">
                <h4 className="flex-1">Tax</h4>
                <h4 className="font-medium">₱{taxAmount}</h4>
              </div>

              <hr className="h-px w-full text-gray-100" />
              <div className="flex items-center px-6 py-4 font-light text-gray-400">
                <h4 className="flex-1">Total (PHP)</h4>
                <h4 className="font-semibold text-black">₱{totalAmount}</h4>
              </div>
            </div>
            <div className="mt-8 px-6 text-right">
              <SheetClose asChild>
                <Button type="submit" size={'lg'}>
                  Checkout
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
