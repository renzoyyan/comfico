'use client';

import { ShoppingBag, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, buttonVariants } from '@/shared/components/ui/button';
import { CircularLoader } from '@/shared/components/ui/circular-loader';
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { ROUTES } from '@/shared/constants/routes';
import { useAuth } from '@/shared/hooks/use-auth';
import { useStore } from '@/shared/hooks/use-store';
import { useCartStore } from '@/shared/store/cart';
import { cn, sleep } from '@/shared/utils/commons';
import { LocalStorageUtil } from '@/shared/utils/local-storage';
import { CartProduct } from './cart-product';

export const SideCart = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const store = useStore(useCartStore, state => state);
  const router = useRouter();
  const { user } = useAuth();

  if (!store?._hasHydrated) {
    return (
      <div className="flex items-center gap-x-1.5">
        <ShoppingCart className="icon-sm" />
        <span className="hidden lg:inline-block">Cart</span>
      </div>
    );
  }

  const amountWithoutTax = store.products.reduce((acc, item) => acc + item.qty * item.price, 0);
  // const taxAmount = (amountWithoutTax * 0.15).toFixed(2);

  // const totalAmount = (amountWithoutTax + +taxAmount).toFixed(2);

  const handleCheckout = () => {
    setIsRedirecting(true);
    if (!user) {
      LocalStorageUtil.set('cart-callback-url', ROUTES.CART);
      return router.push(ROUTES.LOGIN);
    }
    sleep();
    router.push(ROUTES.CART);
    setIsRedirecting(false);
  };

  return (
    <Sheet modal={false}>
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
          <span className="hidden lg:inline-block">Cart</span>
        </div>
      </SheetTrigger>
      <SheetContent hideCloseBtn className="w-full px-0 lg:max-w-md">
        <ScrollArea className={cn(store.products.length > 3 ? 'h-[900px]' : 'h-full')}>
          <SheetHeader className="mb-4 flex flex-row items-center justify-between px-6 pt-2">
            <SheetTitle>Your Cart</SheetTitle>
            <SheetClose asChild>
              <Button variant={'ghost'} size={'icon'} className="!mt-0">
                <X className="icon-sm text-gray-600" />
              </Button>
            </SheetClose>
          </SheetHeader>

          {/* CART PRODUCTS */}
          <div className="space-y-4 px-6">
            {store?.products?.length > 0 ? (
              store?.products.map(product => <CartProduct key={product.id} product={product} />)
            ) : (
              <div className=" grid h-[85vh] place-content-center gap-y-4 text-center text-brand-1">
                <ShoppingBag className="mx-auto h-8 w-8" />
                <h3 className="text-xl font-medium">Your cart is empty</h3>

                <SheetClose asChild>
                  <Link
                    href={ROUTES.SHOP}
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'lg',
                      className: 'mb-36',
                    })}
                  >
                    Start shopping
                  </Link>
                </SheetClose>
              </div>
            )}
          </div>
          {/* END CART PRODUCTS */}

          {store?.products.length > 0 && (
            <SheetFooter className="mt-10 pb-6 sm:flex-col">
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
                {/* <div className="flex items-center px-6 py-4 font-light text-gray-400">
                <h4 className="flex-1">Tax</h4>
                <h4 className="font-medium">₱{taxAmount}</h4>
              </div> */}

                <hr className="h-px w-full text-gray-100" />
                <div className="flex items-center px-6 py-4 font-light text-gray-400">
                  <h4 className="flex-1">Total (PHP)</h4>
                  <h4 className="font-semibold text-black">₱{amountWithoutTax}</h4>
                </div>
              </div>
              <div className="mt-8 px-6 text-right">
                <Button type="button" size={'lg'} disabled={isRedirecting} onClick={handleCheckout}>
                  {isRedirecting && <CircularLoader />}
                  Checkout
                </Button>
              </div>
            </SheetFooter>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
