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

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop',
    weight: 4.5,
    source: 'own',
    image: '/1.webp?height=200&width=200',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    description: 'Latest model smartphone',
    weight: 0.5,
    source: 'amazon',
    image: '/2.webp?height=200&width=200',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 99.99,
    description: 'Noise-cancelling headphones',
    weight: 0.75,
    source: 'walmart',
    image: '/3.webp?height=200&width=200',
  },
  {
    id: 4,
    name: 'Tablet',
    price: 299.99,
    description: '10-inch tablet',
    weight: 1.0,
    source: 'own',
    image: '/4.webp?height=200&width=200',
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Fitness tracker watch',
    weight: 0.25,
    source: 'amazon',
    image: '/slider3.jpg?height=200&width=200',
  },
  {
    id: 6,
    name: 'Camera',
    price: 599.99,
    description: 'Digital SLR camera',
    weight: 1.5,
    source: 'walmart',
    image: '/slider4.jpg?height=200&width=200',
  },
];

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
