import {
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
        <FeaturedProducts />
        <Services />
        <Products />
        <LimitedOffer />
        <Newsletter />
      </main>
    </PageLayout>
  );
}
