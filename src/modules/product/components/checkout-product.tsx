import { Product, useCartStore } from '@/shared/store/cart';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';

type Props = {
  product: Product;
};

export const CheckoutProduct = ({ product }: Props) => {
  const { handleAddProductToCart, handleRemoveProductFromCart } = useCartStore(state => state);

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
    <li className="flex py-6 sm:py-10">
      <div className="relative h-24 w-24 sm:h-48 sm:w-48">
        <Image
          src={
            product?.images?.length > 0
              ? product.images[0].url
              : 'https://placehold.co/192x192/png?text=Image+not+available'
          }
          placeholder="blur"
          blurDataURL={
            product?.images?.length > 0
              ? product.images[0].url
              : 'https://placehold.co/192x192/png?text=Image+not+available'
          }
          alt={product.name}
          fill
          className="h-auto w-auto rounded-md object-cover object-right"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-y-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">{product.name}</h3>
            </div>
            <div className="mt-1 flex justify-between text-sm text-gray-500">
              Category: {product.category.name}
            </div>
            <p className="mt-1 flex text-sm font-medium">₱{product.price.toFixed(2)}</p>
          </div>
          <div className="mt-1 sm:mt-0">
            <div className="flex flex-1 items-center gap-x-2">
              <div className="mt-4 flex flex-1 items-center gap-x-2 sm:mt-0 sm:pr-9">
                <Button
                  size={'icon'}
                  className="h-8 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-50"
                  onClick={() => decreaseQty(product)}
                  disabled={product.stock === 0}
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
                  disabled={product.stock === 0 || product.qty > product.stock}
                >
                  <Plus className="h-4 w-4 text-gray-500" />
                </Button>
              </div>

              <div className="absolute right-0 top-0">
                <Button
                  variant={'ghost'}
                  onClick={() => handleRemoveProductFromCart(product)}
                  className="h-full py-0"
                >
                  <X className="icon-sm text-gray-400" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 flex text-sm text-brand-2 sm:mt-1">Available stocks: {product.stock}</p>
      </div>
    </li>
  );
};
