import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { DataTable, columns } from '@/modules/my-orders';
import { getOrders } from '@/modules/my-orders/services';
import { UserNavbar } from '@/shared/components/partials';
import { authOptions } from '@/shared/utils/auth';

const MyOrdersPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!session) return redirect('/');

  const { data: orders } = await getOrders({ user_id: user?.id }, user?.access_token);

  return (
    <>
      <UserNavbar />

      <div className="container">
        <h1 className="mt-8 text-lg font-bold sm:text-2xl lg:text-3xl">My orders</h1>

        <DataTable columns={columns} data={orders.items} />
      </div>
    </>
  );
};

export default MyOrdersPage;
