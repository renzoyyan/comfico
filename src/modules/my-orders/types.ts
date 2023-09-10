import { Product } from '../product/types';

export interface IOrder {
  id: string;
  payment_status: string;
  total_amount: number;
  address: string;
  phone: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  order_items: IOrderItem[];
}

interface IOrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product: Product;
  quantity: number;
}

export interface Params {
  user_id: string;
  page: number;
}
