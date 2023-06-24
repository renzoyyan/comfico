import {
  FeaturedProducts,
  HeroSection,
  LimitedOffer,
  Newsletter,
  Products,
  Services,
} from '@/modules/home';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Products />
      <LimitedOffer />
      <Newsletter />
    </main>
  );
}
