import Image from 'next/image';
import { Minus, Plus, Truck } from 'lucide-react';

import Sofa from '@/shared/assets/images/sofa-gray.jpg';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { type Product, useCartStore } from '@/shared/store/cart';

type Props = {
  product: Product;
};

export const CartProduct = ({ product }: Props) => {
  const { handleAddProductToCart, handleRemoveProductFromCart } = useCartStore(state => state);
  const productAmount = product?.price * +product?.qty;

  const increaseQty = (product: Product) => {
    const newQty = product.qty + 1;
    const item = { ...product, qty: newQty };

    if (newQty > product.stock) return;

    handleAddProductToCart(item);
  };

  const decreaseQty = (product: Product) => {
    const newQty = product.qty - 1;
    const item = { ...product, qty: newQty };

    if (newQty <= 0) {
      return handleRemoveProductFromCart(item);
    }

    handleAddProductToCart(item);
  };

  return (
    <div className="flex gap-4">
      <div className="h-[100px] w-[100px]">
        <div className="relative flex h-full w-full">
          <Image
            src={product?.images.length > 0 ? product?.images[0].url : Sofa}
            alt={product?.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="shrink-0 rounded-lg object-cover"
          />
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase text-gray-400">{product?.category?.name}</h4>
        <h3 className="mt-1 text-lg font-medium uppercase">{product?.name}</h3>

        <div className="5 mt-2.5 inline-flex gap-x-1">
          <Badge variant={'destructive-light'}>
            <Truck className="icon-sm" />
            Free shipping
          </Badge>
        </div>

        <div className="mt-4 grid grid-cols-2 items-center gap-x-4 ">
          <div className="flex flex-1 items-center gap-x-2">
            <Button
              size={'icon'}
              className="h-8 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
              onClick={() => decreaseQty(product)}
            >
              <Minus className="h-4 w-4 text-gray-500" />
            </Button>

            <Input
              readOnly
              value={product.qty}
              className="h-8 w-12 text-center font-medium shadow-sm !ring-0"
            />
            <Button
              size={'icon'}
              className="h-8 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
              onClick={() => increaseQty(product)}
            >
              <Plus className="h-4 w-4 text-gray-500" />
            </Button>
          </div>

          <h4 className="text-right text-lg font-semibold">₱{productAmount.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};
