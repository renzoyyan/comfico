'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Button, ButtonProps } from '../../../shared/ui/button';
import WhiteChair from '@/shared/assets/images/white-chair.jpg';
import { cn } from '../../../shared/utils/commons';
import { useCartStore } from '../../../shared/store/cart';
import { TProduct } from '@/modules/product/types';

type Props = ButtonProps & {
  product: Omit<TProduct, 'createdAt'>;
  className?: string;
};

const ProductCard = (props: Props) => {
  const addToCart = useCartStore(state => state.handleAddProductToCart);

  const { product, className, ...btnProps } = props;

  return (
    <div className={cn('flex shrink-0 snap-start flex-col', className)}>
      <div className="relative aspect-square w-full">
        <Image
          src={product?.image ?? WhiteChair}
          alt={product?.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg  object-cover"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold xl:text-2xl">{product?.name}</h3>
          <h4 className="text-base font-semibold ">₱{product?.price}</h4>
        </div>
        <p className="mb-4 mt-2 pr-4 text-sm text-brand-4  sm:text-base">
          Yorem ipsum dolor sit amet, consectetur. Lorem ipsum.
        </p>
        <Button {...btnProps} onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export { ProductCard };
