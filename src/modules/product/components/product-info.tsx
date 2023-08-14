'use client';

import { Button } from '@/shared/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Star, StarHalf } from 'lucide-react';
import { ProductSliderProps } from './product-slider';
import { useCartStore } from '@/shared/store/cart';

export const ProductInfo = ({ product }: ProductSliderProps) => {
  const addToCart = useCartStore(state => state.handleAddProductToCart);

  return (
    <div className="text-brand-3 xl:col-span-2">
      <h1 className="text-4xl font-bold text-brand-1">{product.name}</h1>

      <div className="flex gap-x-1">
        <Star fill="#facc15" className="icon-sm" strokeWidth={0} />
        <Star fill="#facc15" className="icon-sm" strokeWidth={0} />
        <Star fill="#facc15" className="icon-sm" strokeWidth={0} />
        <Star fill="#facc15" className="icon-sm" strokeWidth={0} />
        <StarHalf fill="#facc15" className="icon-sm" strokeWidth={0} />
        <h3 className="text-sm font-medium">4.5</h3>
      </div>
      <div className="mt-3 font-medium">
        <h2>Available stocks: {product.stock}</h2>
        <h2>Category: {product.category?.name}</h2>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Description:</h2>
        <p className="max-w-3xl text-brand-4">{product.long_description}</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 min-[425px]:flex-row">
        <Button
          size={'lg'}
          className="w-full min-[425px]:w-[unset] sm:px-14"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="icon-xs mr-2 text-white" />
          Add to cart
        </Button>
        <div className="grid h-11 w-full place-content-center rounded-full  border border-gray-300 px-6 text-xl font-semibold min-[425px]:w-[unset]">
          ₱{product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
