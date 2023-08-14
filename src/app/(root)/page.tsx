import { Suspense } from 'react';

import {
  FeaturedLoader,
  FeaturedProducts,
  HeroSection,
  LimitedOffer,
  Newsletter,
  Products,
  Services,
} from '@/modules/home';
import { PageLayout } from '@/shared/layout';

export default function Home() {
  return (
    <PageLayout>
      <main>
        <HeroSection />
        <Suspense fallback={<FeaturedLoader />}>
          <FeaturedProducts />
        </Suspense>
        <Services />
        <Suspense fallback={<p>Loading products</p>}>
          <Products />
        </Suspense>
        <LimitedOffer />
        <Newsletter />
      </main>
    </PageLayout>
  );
}
