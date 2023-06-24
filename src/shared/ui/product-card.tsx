import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Button, ButtonProps } from './button';
import WhiteChair from '@/shared/assets/images/white-chair.jpg';
import { cn } from '../utils/commons';

type Props = ButtonProps & {
  productName?: string;
  price?: number;
  description?: string;
  image?: string | StaticImageData;
  className?: string;
};

const ProductCard = (props: Props) => {
  const {
    productName = 'White Chair',
    price = 4000,
    description = 'Yorem ipsum dolor sit amet, consectetur. Lorem ipsum.',
    image,
    className,
    ...btnProps
  } = props;

  return (
    <div className={cn('flex shrink-0 snap-start flex-col', className)}>
      <div className="relative aspect-square w-full">
        <Image src={WhiteChair} alt="White Chair" fill className="rounded-lg  object-cover" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold xl:text-2xl">{productName}</h3>
          <h4 className="text-base font-semibold ">PHP {price}</h4>
        </div>
        <p className="mb-4 mt-2 pr-4 text-sm text-brand-4  sm:text-base">{description} </p>
        <Button {...btnProps}>Add to cart</Button>
      </div>
    </div>
  );
};

export { ProductCard };
