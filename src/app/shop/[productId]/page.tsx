import { ProductSlider } from '@/modules/product';
import { getProduct } from '@/modules/product/services';
import { PageLayout } from '@/shared/layout';
import React from 'react';

const Product = async ({ params }: { params: { productId: string } }) => {
  const { data: product } = await getProduct(params.productId);

  return (
    <PageLayout>
      <main className="container">
        <section className="py-48">
          <div className="grid gap-x-16 lg:grid-cols-2">
            <ProductSlider product={product} />
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <h2>₱{product.price.toFixed(2)}</h2>
              <h2>₱{product.price.toFixed(2)}</h2>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Product;
