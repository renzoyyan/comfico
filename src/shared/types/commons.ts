export type Paginated<T> = {
  items: T[];
  total: number;
  nextPage: number | null;
  prevPage: number | null;
};
