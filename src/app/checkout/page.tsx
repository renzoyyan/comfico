import { CheckoutForm } from '@/modules/product';
import { ROUTES } from '@/shared/constants/routes';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Checkout = () => {
  return (
    <main className="mx-auto max-w-7xl pt-20">
      <Link href={ROUTES.SHOP} className="mb-10 inline-flex items-center text-sm text-gray-500">
        <ArrowLeft className="mr-2 h-5 w-5 text-gray-400" />
        Back
      </Link>

      <CheckoutForm />
    </main>
  );
};

export default Checkout;
