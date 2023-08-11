'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Button, buttonVariants } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { ROUTES } from '@/shared/constants/routes';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { TLogin, TRegister } from '../types';
import { LoginSchema, RegisterSchema } from '../validations';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { sleep } from '@/shared/utils/commons';
import { ErrorMessage } from '@/shared/ui/error-message';
import { Logo } from '@/shared/ui/partials';
import api from '@/shared/utils/api';

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const form = useForm<TRegister>({ resolver: zodResolver(RegisterSchema) });

  const { handleSubmit, control, formState } = form;

  const handleRegister = async (payload: TRegister) => {
    try {
      const { data } = await api.post('/api/auth/register', payload);

      if (!data) return;

      const res = await signIn('credentials', { redirect: false, ...payload });

      const error = res?.error;

      if (!error) {
        setErrorMessage('');
        router.replace(ROUTES.HOME);
        await sleep(6000);

        return res;
      }

      setErrorMessage(error);
      return;
    } catch (error: any) {
      setErrorMessage(error?.response?.data);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-12">
      <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12  sm:px-12">
          <h1 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to Comfico
          </h1>

          {errorMessage && <ErrorMessage message={errorMessage} className="mb-6" />}
          <Form {...form}>
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
              <FormField
                control={control}
                name="first_name"
                defaultValue={''}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="last_name"
                defaultValue={''}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="contact_number"
                defaultValue={''}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
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
                <Button
                  type="submit"
                  size={'full'}
                  className="rounded-md"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting && <CircularLoader />}
                  Create an account
                </Button>

                <div className="mt-10 text-center">
                  <p className="text-sm">
                    Already a member?
                    <span>
                      <Link
                        href={ROUTES.LOGIN}
                        className={buttonVariants({
                          variant: 'link',
                          className: 'pl-1 font-bold text-brand-1',
                        })}
                      >
                        Sign in
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
