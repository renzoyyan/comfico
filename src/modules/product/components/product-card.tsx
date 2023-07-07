'use client';

import Image from 'next/image';
import React from 'react';

import { Button, ButtonProps } from '../../../shared/ui/button';
import WhiteChair from '@/shared/assets/images/white-chair.jpg';
import { cn } from '../../../shared/utils/commons';
import { useCartStore } from '../../../shared/store/cart';
import { TProduct } from '@/modules/product/types';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

type Props = ButtonProps & {
  product: Omit<TProduct, 'createdAt'>;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
};

export const ProductCard = (props: Props) => {
  const addToCart = useCartStore(state => state.handleAddProductToCart);

  const { product, className, orientation = 'vertical', ...btnProps } = props;

  return (
    <div
      className={cn(
        'flex shrink-0 snap-start',
        className,
        orientation === 'vertical' ? 'flex-col' : 'flex-row'
      )}
    >
      <Link href={`${ROUTES.SHOP}/${product.id}?productName=${product.name}`}>
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product?.image ?? WhiteChair}
            alt={product?.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transform  rounded-lg object-cover transition duration-150  hover:scale-110"
          />
        </div>
      </Link>

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
