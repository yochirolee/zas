'use client';
import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  weight: number; // in pounds
  source: 'ctenvios' | 'amazon' | 'walmart';
  image: string;
};

type ShippingMethod = 'air' | 'ship';

type CartItem = Product & {
  quantity: number;
};

const shippingRates = {
  air: 2.5, // $2.5 per pound
  ship: 1.5, // $1.5 per pound
};
interface CartStore {
  cart: CartItem[];
  shippingMethod: ShippingMethod;
  filter: 'all' | 'own' | 'amazon' | 'walmart';
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getCartQuantity: (productId: number) => number;
  calculateTotalWeight: () => number;
  calculateShippingCost: () => number;
  calculateItemTotal: (item: CartItem) => string;
  calculateTotal: () => string;
  setShippingMethod: (method: ShippingMethod) => void;
  setFilter: (filter: 'all' | 'own' | 'amazon' | 'walmart') => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  shippingMethod: 'ship',
  filter: 'all',

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        };
      }
      return { cart: state.cart.filter((item) => item.id !== productId) };
    }),

  getCartQuantity: (productId) => {
    const item = get().cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  },

  calculateTotalWeight: () => {
    return get().cart.reduce(
      (sum, item) => sum + item.weight * item.quantity,
      0,
    );
  },

  calculateShippingCost: () => {
    const totalWeight = get().calculateTotalWeight();
    return totalWeight * shippingRates[get().shippingMethod];
  },

  calculateItemTotal: (item) => {
    return (item.price * item.quantity).toFixed(2);
  },

  calculateTotal: () => {
    const itemsTotal = get().cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const shippingCost = get().calculateShippingCost();
    return (itemsTotal + shippingCost).toFixed(2);
  },

  setShippingMethod: (method) => set({ shippingMethod: method }),
  setFilter: (filter) => set({ filter }),
}));
