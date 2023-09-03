import { Paginated } from '@/shared/types/commons';
import api from '@/shared/utils/api';
import { AxiosResponse } from 'axios';
import { Category, CheckoutPayload, Product } from './types';

export const getProducts = (params?: any): Promise<AxiosResponse<Paginated<Product>>> => {
  return api.get('/api/products', { params });
};

export const getProduct = (id: string): Promise<AxiosResponse<Product>> => {
  return api.get(`/api/products/${id}`);
};

export const getCategories = (): Promise<AxiosResponse<Category[]>> => {
  return api.get('/api/category');
};

export const checkout = (payload: CheckoutPayload) => {
  return api.post('/api/checkout', payload);
};
