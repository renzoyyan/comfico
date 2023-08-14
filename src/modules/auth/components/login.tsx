'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Button, buttonVariants } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { ROUTES } from '@/shared/constants/routes';
import { CircularLoader } from '@/shared/components/ui/circular-loader';
import { TLogin } from '../types';
import { LoginSchema } from '../validations';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { sleep } from '@/shared/utils/commons';
import { ErrorMessage } from '@/shared/components/ui/error-message';
import { LocalStorageUtil } from '@/shared/utils/local-storage';
import { useCartStore } from '@/shared/store/cart';

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const products = useCartStore(state => state.products);
  const router = useRouter();
  const form = useForm<TLogin>({ resolver: zodResolver(LoginSchema) });

  const { handleSubmit, control, formState } = form;

  const handleSignIn = async (payload: TLogin) => {
    const cartCallbackUrl = LocalStorageUtil.get('cart-callback-url');
    const res = await signIn('credentials', { redirect: false, ...payload });

    const error = res?.error;

    if (error) return setErrorMessage(error);

    setErrorMessage('');

    cartCallbackUrl && products.length > 0 ? router.push(ROUTES.CART) : router.push(ROUTES.HOME);

    await sleep(6000);

    return res;
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12">
      <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12  sm:px-12">
          <h1 className=" text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome back!
          </h1>
          <p className="mb-10 text-sm text-gray-400">
            Start shopping for high-quality goods for your home and business décor.
          </p>

          {errorMessage && <ErrorMessage message={errorMessage} className="mb-6" />}
          <Form {...form}>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
              <FormField
                control={control}
                name="email"
                defaultValue={''}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                defaultValue={''}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Link
                  href={'#'}
                  className="text-primary/50 -mt-2 mb-4 block text-right text-sm font-medium"
                >
                  Forgot Password
                </Link>
                <Button
                  type="submit"
                  size={'full'}
                  className="rounded-md"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting && <CircularLoader />}
                  Sign in
                </Button>

                <div className="mt-10 text-center">
                  <p className="text-sm">
                    Don&apos;t you have an account?
                    <span>
                      <Link
                        href={ROUTES.REGISTER}
                        className={buttonVariants({
                          variant: 'link',
                          className: 'pl-1 font-bold text-brand-1',
                        })}
                      >
                        Sign up for free
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
