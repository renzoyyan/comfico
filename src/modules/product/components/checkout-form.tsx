'use client';

import { useStore } from '@/shared/hooks/use-store';
import { useCartStore } from '@/shared/store/cart';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { useForm, FieldValues } from 'react-hook-form';
import { CartProduct } from './cart/cart-product';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const CheckoutForm = () => {
  const store = useStore(useCartStore, state => state);
  const router = useRouter();
  const methods = useForm();
  const { control, formState, handleSubmit } = methods;

  useEffect(() => {
    if (store?._hasHydrated && store.products.length === 0) {
      return router.back();
    }
  }, [router, store]);

  if (!store?._hasHydrated) {
    return <></>;
  }

  const amountWithoutTax = store.products.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handlePlaceOrder = (payload: FieldValues) => {
    console.log(payload);
  };

  return (
    <div className="flex gap-10">
      <Form {...methods}>
        <section className="flex-[2]">
          <div className="mb-8">
            <h2 className="mb-6 text-lg font-semibold">Delivery Information</h2>

            <div className="grid gap-x-8 gap-y-4 rounded-lg bg-white p-8 shadow-sm sm:grid-cols-2">
              <FormField
                control={control}
                rules={{ required: 'This field is required' }}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                rules={{ required: 'This field is required' }}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                }}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                rules={{ required: 'This field is required' }}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                rules={{ required: 'This field is required' }}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Province/Municapality</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <FormField
                  control={control}
                  rules={{ required: 'This field is required' }}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1">
          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

          <div className="rounded-md border border-gray-100 bg-white py-6 shadow-sm">
            <div className="space-y-4 px-6">
              {store?.products.map(product => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>

            {store?.products.length > 0 && (
              <div className="mt-10  sm:flex-col">
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

                  <hr className="h-px w-full text-gray-100" />
                  <div className="flex items-center px-6 py-4 font-light text-gray-400">
                    <h4 className="flex-1">Total (PHP)</h4>
                    <h4 className="font-semibold text-black">₱{amountWithoutTax}</h4>
                  </div>
                </div>
                <div className="mt-8 px-6 text-right">
                  <Button
                    type="submit"
                    size={'lg'}
                    disabled={formState.isSubmitting}
                    onClick={handleSubmit(handlePlaceOrder)}
                  >
                    {/* {isRedirecting && <CircularLoader />} */}
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </Form>
    </div>
  );
};
