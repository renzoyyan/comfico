import { Paginated } from '@/shared/types/commons';
import api from '@/shared/utils/api';
import { AxiosResponse } from 'axios';
import { IOrder } from './types';

export const getOrders = (
  params?: any,
  authToken?: string
): Promise<AxiosResponse<Paginated<IOrder>>> => {
  return api.get('/api/orders', {
    params,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export const getOrder = (id: string, authToken?: string) => {
  return api.get(`/api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};
