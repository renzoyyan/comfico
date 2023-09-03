'use client';

import { checkout } from '@/modules/product/services';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { IOrder } from '../types';

export const columns: ColumnDef<IOrder>[] = [
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'phone',
    header: 'Phone number',
  },
  {
    accessorKey: 'total_amount',
    header: 'Total amount',
  },
  {
    accessorKey: 'payment_status',
    header: 'Payment status',
    cell: ({ row }) => {
      const data = row.original;

      return (
        <Badge
          variant={data.payment_status === 'PAID' ? 'success' : 'destructive'}
          className="uppercase"
        >
          {data.payment_status}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      const products = data.order_items.map(item => ({ ...item.product, qty: item.quantity }));

      const handlePayNow = async () => {
        const response = await checkout({ products, user_id: data.user_id, order_id: data.id });

        window.location = response.data.url;
      };

      return (
        <div className="flex items-center justify-end gap-x-4 pr-6">
          <Link href={`/my-orders/${data.id}`}>View details</Link>
          {data.payment_status === 'UNPAID' && (
            <Button size={'sm'} onClick={handlePayNow}>
              Pay now
            </Button>
          )}
        </div>
      );
    },
  },
];
