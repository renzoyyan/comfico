import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Control } from 'react-hook-form';
import { getCategories } from '../services';

type Props = {
  control: Control<
    {
      min_price: number;
      max_price: number;
      category_id: string;
    },
    any
  >;
};

export const CategoriesForm = async ({ control }: Props) => {
  const { data: categories } = await getCategories();

  return (
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
                    <RadioGroupItem value="all" />
                  </FormControl>
                  <FormLabel className="font-normal">All</FormLabel>
                </FormItem>
                {categories.map(category => (
                  <FormItem className="flex items-center space-x-3 space-y-0" key={category.id}>
                    <FormControl>
                      <RadioGroupItem value={category.id} />
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
  );
};
