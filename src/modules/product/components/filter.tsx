'use client';

import { useForm, FieldValues } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Category } from '../types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { cn, sleep } from '@/shared/utils/commons';
import { CircularLoader } from '@/shared/ui/circular-loader';

type Props = {
  categories: Category[];
};

export const Filter = ({ categories }: Props) => {
  const methods = useForm({
    defaultValues: { min_price: 0, max_price: 15000, category_id: 'all' },
  });
  const { control, handleSubmit, reset, formState } = methods;
  const router = useRouter();
  const pathname = usePathname();

  const onSubmit = (payload: FieldValues) => {
    const category = payload?.category_id === 'all' ? 'all' : payload.category_id;

    router.push(
      pathname +
        `?min_price=${payload?.min_price}&max_price=${payload?.max_price}&category_id=${category}`
    );

    return sleep();
  };

  const handleReset = () => {
    reset();
    router.push(pathname);

    return sleep();
  };

  return (
    <Form {...methods}>
      {/* PRICE */}
      <div>
        <div className="flex items-center gap-6">
          <FormField
            control={control}
            name="min_price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Min price</FormLabel>
                <FormControl>
                  <Input type="number" min={0} max={9999} placeholder="0 - 9,999" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="max_price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Max price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={10000}
                    max={15000}
                    placeholder="10,000 - 15,000"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
      {/* END PRICE */}

      {/* CATEGORIES */}
      <div>
        <h2 className="mb-4 font-medium">Category</h2>

        <FormField
          control={control}
          name="category_id"
          defaultValue={'all'}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" checked={field.value === 'all'} />
                    </FormControl>
                    <FormLabel className="font-normal">All</FormLabel>
                  </FormItem>
                  {categories?.map((category: Category) => (
                    <FormItem className="flex items-center space-x-3 space-y-0" key={category.id}>
                      <FormControl>
                        <RadioGroupItem value={category.id} checked={field.value === category.id} />
                      </FormControl>
                      <FormLabel className="font-normal">{category.name}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* END CATEGORIES */}

      <div className="grid gap-6 lg:grid-cols-2">
        <Button
          type="button"
          size={'lg'}
          variant={'outline'}
          onClick={handleReset}
          disabled={formState.isSubmitting}
        >
          Reset
        </Button>
        <Button
          type="submit"
          size={'lg'}
          onClick={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting && <CircularLoader className={cn('mr-2')} />}
          Apply filter
        </Button>
      </div>
    </Form>
  );
};
