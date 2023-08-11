import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { Product as TProduct } from '@/modules/product/types';
import { toast } from '../hooks/use-toast';

export type Product = Omit<TProduct, 'createdAt'>;

type CartStates = {
  isCartOpen: boolean;
  products: Product[];
  totalAmount: number;
  totalProducts: number;
  _hasHydrated: boolean;
};

type CartActions = {
  handleCartOpen: () => void;
  handleCartClose: () => void;
  handleAddProductToCart: (product: Product) => void;
  handleRemoveProductFromCart: (product: Product) => void;
  handleRemoveAll: () => void;
  setHasHydrated: (state: boolean) => void;
};

export const useCartStore = create(
  persist(
    immer<CartStates & CartActions>((set, get) => ({
      isCartOpen: false,
      products: [],
      totalAmount: 0,
      totalProducts: 0,
      _hasHydrated: false,

      handleCartOpen: () => {
        set(state => {
          state.isCartOpen = true;
        });
      },

      handleCartClose: () => {
        set(state => {
          state.isCartOpen = false;
        });
      },

      handleAddProductToCart: product => {
        const products = get().products;
        const isProductExist = products.find(prod => prod.id === product.id);
        const item = { ...product, qty: product.qty || 1 };

        if (!isProductExist) {
          const updatedProducts = [...products, { ...product, qty: 1 }];

          set(state => ({
            products: updatedProducts,
            // totalAmount: state.totalAmount + product.price,
            totalProducts: state.totalProducts + 1,
          }));

          toast({
            title: `New item added`,
            variant: 'success',
            description: `${product.name} has been added to your cart`,
          });
        } else {
          const updatedProducts = products.map(prod => (prod.id === product.id ? item : prod));

          set(state => ({
            products: updatedProducts,
            // totalAmount: state.totalAmount + product.price,
          }));
        }
      },

      handleRemoveProductFromCart: product => {
        set(state => ({
          products: state.products.filter(item => item.id !== product.id),
          // totalAmount: state.totalAmount - product.price * product.qty,
          totalProducts: state.totalProducts - 1,
        }));
      },

      handleRemoveAll: () => {
        set(state => ({
          products: [],
          totalProducts: 0,
        }));
      },

      setHasHydrated: state => {
        set({
          _hasHydrated: state,
        });
      },
    })),
    {
      name: 'cart-products',
      // storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
      partialize: state => ({
        products: state.products,
        totalProducts: state.totalProducts,
      }),
    }
  )
);
