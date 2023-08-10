import { getProducts } from '../services';
import { ProductCard } from './product-card';

export const Collections = async () => {
  const { data: products } = await getProducts();

  return (
    <div className="grid gap-6  sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {products.map(product => (
        <ProductCard variant={'outline'} key={product.id} product={product} />
      ))}
    </div>
  );
};
