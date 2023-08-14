'use client';

import { useCartStore } from '@/shared/store/cart';
import { CheckoutProduct } from './checkout-product';
import { CheckoutSummary } from './checkout-summary';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/shared/constants/routes';
import { useRouter } from 'next/navigation';

export const CheckoutForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const products = useCartStore(state => state.products);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      router.replace(ROUTES.SHOP);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <h2 className="mb-4 font-bold sm:text-4xl">Shopping Cart</h2>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        <section className="lg:col-span-7">
          <div className="">
            <ul role="list" className="divide-y divide-gray-300 border-y border-gray-300">
              {products.map(product => (
                <CheckoutProduct key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </section>
        <CheckoutSummary />
      </div>
    </>
  );
};
