'use client';

import { useAuth } from '@/shared/hooks/use-auth';
import { useCartStore } from '@/shared/store/cart';
import { Button } from '@/shared/components/ui/button';
import { CircularLoader } from '@/shared/components/ui/circular-loader';
import api from '@/shared/utils/api';
import { LocalStorageUtil } from '@/shared/utils/local-storage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const CheckoutSummary = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();

  const { user } = useAuth();
  const products = useCartStore(state => state.products);
  const handleRemoveAll = useCartStore(state => state.handleRemoveAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      handleRemoveAll();
      LocalStorageUtil.remove('cart-callback-url');
    }

    if (searchParams.get('cancelled')) {
      toast.error('Payment cancelled');
    }
  }, [searchParams, handleRemoveAll]);

  const handlePlaceOrder = async () => {
    if (!user) return;

    setIsSubmitting(true);
    const response = await api.post('/api/checkout', {
      products: products,
      user_id: user.id,
    });

    window.location = response.data.url;

    setIsSubmitting(false);
  };

  const amountWithoutTax = products.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmount = (amountWithoutTax + +taxAmount).toFixed(2);

  return (
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
        <Button
          size={'full'}
          className="h-12 rounded-md text-base"
          onClick={handlePlaceOrder}
          disabled={isSubmitting}
        >
          {isSubmitting && <CircularLoader />}
          Place order
        </Button>
      </div>
    </section>
  );
};
