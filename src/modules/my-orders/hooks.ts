import { useAuth } from '@/shared/hooks/use-auth';
import { Paginated, QueryOpt } from '@/shared/types/commons';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from './services';
import { IOrder } from './types';

const ORDER_QUERY_KEY = 'orders';

export const useGetOrders = (page?: number, options?: QueryOpt<Paginated<IOrder>>) => {
  const { user } = useAuth();
  const access_token = user?.access_token;

  const PARAMS = { user_id: user?.id, page };

  return useQuery<Paginated<IOrder>>({
    queryKey: [ORDER_QUERY_KEY],
    queryFn: () => getOrders(PARAMS, access_token).then(res => res.data),
    enabled: !!user,
    ...options,
  });
};
