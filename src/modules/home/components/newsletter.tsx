'use client';

import { Button } from '@/shared/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

export const Newsletter = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  return (
    <section className="relative overflow-hidden py-72 xl:h-screen xl:py-0">
      <div className="absolute -left-28 -top-20 z-10 h-[300px] w-[300px] rounded-full bg-secondary xl:h-[490px] xl:w-[490px]" />
      <div className="container grid h-full place-content-center text-center ">
        <h2 className="max-w-xl font-playfair-display text-2xl font-semibold sm:text-4xl">
          Subscribe to our newsletter for the latest chair collections
        </h2>
        <p className="mt-4 text-sm text-brand-4 sm:text-base">
          Get 10% off on your first order just by subscribing on our newsletter{' '}
        </p>

        <div>
          <Form {...methods}>
            <form>
              <FormField
                control={control}
                name="newsletter_subscription"
                render={({ field }) => (
                  <FormItem>
                    <div className="mx-auto mt-11 flex max-w-sm">
                      <FormControl>
                        <Input
                          className="h-[3.5rem] rounded-full rounded-br-none rounded-tr-none border-brand-1 !ring-0"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <Button size="lg" className="h-[3.5rem] rounded-bl-none rounded-tl-none">
                        Subscribe
                      </Button>
                    </div>
                    <FormDescription className="text-brand-4">
                      You can unsubscribe anytime
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
      <div className="absolute -bottom-48 -right-28 z-10 h-[300px] w-[300px] rounded-full bg-secondary xl:h-[490px] xl:w-[490px]" />
    </section>
  );
};
