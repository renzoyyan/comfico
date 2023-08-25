import { clsx, type ClassValue } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';
import api from './api';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(delay = 2000) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const fetcher = (url: string) => api(url).then(res => res.data);

export const formatDate = (date: string | Date, desiredFormat?: string) => {
  return date ? dayjs(date).format(desiredFormat || 'DD/MM/YYYY') : '';
};
