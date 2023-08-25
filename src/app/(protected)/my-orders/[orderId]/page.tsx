import { truncate } from 'lodash';
import { ArrowLeft } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getOrder } from '@/modules/my-orders/services';
import { UserNavbar } from '@/shared/components/partials';
import { Badge } from '@/shared/components/ui/badge';
import { ROUTES } from '@/shared/constants/routes';
import { authOptions } from '@/shared/utils/auth';
import { formatDate } from '@/shared/utils/commons';

const OrderDetailsPage = async ({ params }: { params: { orderId: string } }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!session) return redirect('/');

  const { data: order } = await getOrder(params.orderId, user?.access_token);

  return (
    <>
      <UserNavbar />
      <main className="container">
        <Link
          href={'/my-orders'}
          className="mt-6 inline-flex items-center gap-x-1.5 text-sm text-gray-400"
        >
          <ArrowLeft className="icon-sm mr-2" />
          Back
        </Link>
        <section className="pb-24 pt-10">
          <h1 className="text-2xl font-bold sm:text-3xl">Order details</h1>
          <div className="mt-16">
            <div className="rounded-sm bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:px-6">
              <div className="flex-1 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex-none  lg:grid-cols-4 lg:gap-4 xl:gap-8">
                <div className="order-description-wrapper">
                  <dt className="font-medium">Date placed</dt>
                  <dd className="text-gray-500 sm:mt-1">
                    {order?.payment_status === 'PAID'
                      ? formatDate(order.created_at, 'MMM DD, YYYY - hh:mm a')
                      : 'Not yet placed'}
                  </dd>
                </div>
                <div className="order-description-wrapper">
                  <dt className="font-medium">Order number</dt>
                  <dd className="text-gray-500 sm:mt-1">{order?.id}</dd>
                </div>
                <div className="order-description-wrapper justify-self-center">
                  <dt className="font-medium">Total amount</dt>
                  <dd className="text-primary font-medium sm:mt-1">
                    ₱{order?.total_amount?.toFixed(2)}
                  </dd>
                </div>
                <div className="order-description-wrapper">
                  <dt className="font-medium">Payment status</dt>
                  <dd className="sm:mt-1">
                    <Badge variant={order?.payment_status === 'PAID' ? 'success' : 'destructive'}>
                      {order?.payment_status}
                    </Badge>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 xl:grid-cols-2">
            {order?.order_items.map((orderItem: any) => (
              <li
                className="rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
                key={orderItem.id}
              >
                <div className="flex items-start">
                  <div className="relative h-20 w-20 flex-shrink-0 sm:h-40 sm:w-40">
                    <Image
                      src={
                        orderItem.product.images[0].url ??
                        'https://placehold.co/192x192/png?text=Image+not+available'
                      }
                      fill
                      alt=""
                      className="h-auto w-auto rounded-sm object-cover sm:object-center"
                    />
                  </div>
                  <div className="ml-6 flex-1 text-sm">
                    <div className="text-primary font-medium sm:flex sm:items-center sm:justify-between">
                      <h2>{orderItem.product.name}</h2>
                      <p className="mt-2">₱{orderItem.product.price}</p>
                    </div>
                    <p className="hidden text-gray-500 sm:mt-2 sm:block">
                      {truncate(orderItem.product.long_description, { length: 420 })}
                    </p>
                  </div>
                </div>
                <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                  <div className="text-sm font-medium text-gray-500">
                    Quantity: {orderItem.quantity}
                  </div>
                  <div className="mt-6 flex items-center justify-center border-t border-gray-300 pt-4 text-sm font-medium text-blue-500 sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                    <Link href={`${ROUTES.SHOP}/${orderItem.product_id}`}>View product</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default OrderDetailsPage;
