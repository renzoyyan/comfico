'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useStore } from '@/shared/hooks/use-store';
import { useCartStore } from '@/shared/store/cart';
import { Button } from '@/shared/ui/button';
import { CheckoutProduct } from './checkout-product';
import api from '@/shared/utils/api';
import { toast } from 'react-hot-toast';

export const CheckoutForm = () => {
  const searchParams = useSearchParams();
  const store = useStore(useCartStore, state => state);

  const router = useRouter();

  useEffect(() => {
    if (store?._hasHydrated && store.products.length === 0) {
      return router.back();
    }
  }, [router, store]);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      store?.handleRemoveAll();
    }

    if (searchParams.get('cancelled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, store]);

  if (!store?._hasHydrated) {
    return <></>;
  }

  const amountWithoutTax = store.products.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmount = (amountWithoutTax + +taxAmount).toFixed(2);

  const handlePlaceOrder = async () => {
    const response = await api.post('/api/checkout', {
      products: store.products,
      user_id: '64d6147e310276a3dd58aa9a',
    });

    window.location = response.data.url;
  };

  return (
    <>
      <h2 className="mb-4 font-bold sm:text-4xl">Shopping Cart</h2>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        <section className="lg:col-span-7">
          <div className="">
            <ul role="list" className="divide-y divide-gray-300 border-y border-gray-300">
              {store?.products.map(product => (
                <CheckoutProduct key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </section>
        <section className="mt-16 rounded-lg bg-gray-50 px-4 sm:px-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium">Order summary</h2>
          <div className="mt-6 divide-y divide-gray-300 text-gray-500">
            <div className="flex items-center justify-between">
              <dt className="text-sm">Subtotal</dt>
              <dd className="text-sm font-medium text-black">₱{amountWithoutTax.toFixed(2)}</dd>
            </div>
            <div className="mt-4 flex items-center justify-between py-4">
              <dt className="text-sm">Shipping fee</dt>
              <dd className="text-sm font-medium text-black">---</dd>
            </div>
            {/* <div className="flex items-center justify-between py-4">
              <dt className="text-sm">Tax estimate</dt>
              <dd className="text-sm font-medium text-black">₱{taxAmount}</dd>
            </div> */}
            <div className="flex items-center justify-between py-4">
              <dt className="text-black">Order total</dt>
              <dd className="font-medium text-black">₱{amountWithoutTax.toFixed(2)}</dd>
            </div>
          </div>
          <div>
            <Button size={'full'} className="h-12 rounded-md text-base" onClick={handlePlaceOrder}>
              Place order
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
