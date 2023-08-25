'use client';

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
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex items-center justify-end gap-x-4 pr-6">
          <Link href={`/my-orders/${data.id}`}>View details</Link>
          {/* {data.payment_status === 'UNPAID' && <Button size={'sm'}>Pay now</Button>} */}
        </div>
      );
    },
  },
];
