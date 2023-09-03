'use client';

import { ROUTES } from '@/shared/constants/routes';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const Search = ({ searchQuery }: { searchQuery?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [search, setSearch] = useState(searchQuery);
  const [query] = useDebounce(search, 500);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(ROUTES.SHOP);
    } else {
      router.push(`${ROUTES.SHOP}?search=${query}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="flex-grow sm:col-span-2">
      {/* <Input placeholder="Search products" {...register('search')} /> */}
      <input
        type="text"
        value={search}
        name="search"
        placeholder="Search products"
        onChange={e => setSearch(e.target.value)}
        className="flex  h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-brand-1 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1/50  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-800"
      />
    </div>
  );
};
