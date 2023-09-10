'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { DataTable, columns } from '@/modules/my-orders';
import { useGetOrders } from '@/modules/my-orders/hooks';
import { UserNavbar } from '@/shared/components/partials';
import { CircularLoader } from '@/shared/components/ui/circular-loader';

const MyOrdersPage = () => {
  const { data, isLoading } = useGetOrders();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const successMessage = 'Payment completed.';
    const cancelledMessage = 'Payment cancelled';

    let timer: NodeJS.Timeout | undefined;

    const showMessageAndRedirect = (message: string) => {
      toast[message.includes('cancelled') ? 'error' : 'success'](message);

      timer = setTimeout(() => {
        router.replace('/my-orders');
      }, 500);

      router.refresh();
    };

    const successQueryParam = searchParams.get('success');
    const cancelledQueryParam = searchParams.get('cancelled');

    if (successQueryParam) {
      return showMessageAndRedirect(successMessage);
    }

    if (cancelledQueryParam) {
      return showMessageAndRedirect(cancelledMessage);
    }

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <UserNavbar />

      <div className="container">
        <h1 className="mt-8 text-lg font-bold sm:text-2xl lg:text-3xl">My orders</h1>

        {isLoading ? (
          <div className="grid h-[80vh] place-content-center">
            <CircularLoader className="text-brand-1" />
          </div>
        ) : (
          <DataTable columns={columns} data={data?.items || []} />
        )}
      </div>
    </>
  );
};

export default MyOrdersPage;
