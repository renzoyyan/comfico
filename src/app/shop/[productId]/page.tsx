import { ProductInfo, ProductSlider } from '@/modules/product';
import { getProduct } from '@/modules/product/services';
import { PageLayout } from '@/shared/layout';

const Product = async ({ params }: { params: { productId: string } }) => {
  const { data: product } = await getProduct(params.productId);

  return (
    <PageLayout>
      <main className="container">
        <section className="py-48">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 xl:grid-cols-3">
            <ProductSlider product={product} />
            <ProductInfo product={product} />
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Product;
