import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';

export type Paginated<T> = {
  items: T[];
  total: number;
  nextPage: number | null;
  prevPage: number | null;
};

export type QueryOpt<T> = Omit<UseQueryOptions<T, unknown, T, QueryKey>, ''>;
