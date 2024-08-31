'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ShoppingCart, Plus, Minus, Trash2, Plane, Ship } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { useCartStore } from '../hooks/useCartStore';

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
    source: 'ctenvios',
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
    source: 'ctenvios',
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

//convert the cart to a custom hook
const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('ship');
  const [filter, setFilter] = useState<'all' | 'ctenvios' | 'amazon' | 'walmart'>(
    'all',
  );
  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return currentCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return currentCart.filter((item) => item.id !== productId);
    });
  };

  const getCartQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const calculateTotalWeight = () => {
    return cart.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  };

  const calculateShippingCost = () => {
    const totalWeight = calculateTotalWeight();
    return totalWeight * shippingRates[shippingMethod];
  };

  const calculateItemTotal = (item: CartItem) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    const itemsTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const shippingCost = calculateShippingCost();
    return (itemsTotal + shippingCost).toFixed(2);
  };
  return {
    cart,
    shippingMethod,
    filter,
    addToCart,
    removeFromCart,
    getCartQuantity,
    calculateTotalWeight,
    calculateShippingCost,
    calculateItemTotal,
    calculateTotal,
    setShippingMethod,
    setFilter,
  };
};

export default function ProductsList() {
  const {
    cart,
    shippingMethod,
    filter,
    addToCart,
    removeFromCart,
    getCartQuantity,
    calculateTotalWeight,
    calculateShippingCost,
    calculateItemTotal,
    calculateTotal,
    setShippingMethod,
    setFilter,
  } = useCartStore();

  /*   const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return currentCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return currentCart.filter((item) => item.id !== productId);
    });
  };

  const getCartQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const calculateTotalWeight = () => {
    return cart.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  };

  const calculateShippingCost = () => {
    const totalWeight = calculateTotalWeight();
    return totalWeight * shippingRates[shippingMethod];
  };

  const calculateItemTotal = (item: CartItem) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    const itemsTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const shippingCost = calculateShippingCost();
    return (itemsTotal + shippingCost).toFixed(2);
  }; */

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((product) => product.source === filter);

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Nuestros Productos</h1>
        <div className="flex items-center space-x-4">
          <Select
            value={filter}
            onValueChange={(value: any) => setFilter(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="ctenvios">Our Products</SelectItem>
              <SelectItem value="amazon">Amazon Products</SelectItem>
              <SelectItem value="walmart">Walmart Products</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-4">
              <div className="relative mb-2 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute right-2 top-2 text-xs">
                  <span className=" mr-2 text-xs font-thin">sold by:</span>
                  <Badge variant="secondary" className=" text-xs">
                    {product.source}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2 text-sm">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 pt-0">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">
                  {product.weight} lbs
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex w-full items-center justify-between">
                <Button size="sm" onClick={() => addToCart(product)}>
                  <Plus className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                {getCartQuantity(product.id) > 0 && (
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-semibold">
                      {getCartQuantity(product.id)}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => addToCart(product)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
