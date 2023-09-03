import { ProductInfo, ProductSlider } from '@/modules/product';
import { getProduct } from '@/modules/product/services';
import { buttonVariants } from '@/shared/components/ui/button';
import { ROUTES } from '@/shared/constants/routes';
import { PageLayout } from '@/shared/layout';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Product = async ({ params }: { params: { productId: string } }) => {
  const { data: product } = await getProduct(params.productId);

  return (
    <PageLayout>
      <main className="container">
        <section className="pb-48 pt-32">
          <Link
            href={ROUTES.SHOP}
            className={buttonVariants({
              variant: 'ghost',
              size: 'sm',
              className: 'mb-16 gap-x-2 pl-0 text-gray-500',
            })}
          >
            <ArrowLeft className="icon-xs" />
            Back
          </Link>

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
