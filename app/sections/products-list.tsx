'use client';
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Minus, Star } from 'lucide-react';
import { useCartStore } from '@/app/hooks/useCartStore';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  weight: number; // in pounds
  source: 'ctenvios' | 'amazon' | 'walmart';
  image: string;
  rating: number;
  category: string;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop',
    weight: 4.5,
    source: 'ctenvios',
    image: '/1.webp?height=200&width=200',
    rating: 4.5,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    description: 'Latest model smartphone',
    weight: 0.5,
    source: 'amazon',
    image: '/2.webp?height=200&width=200',
    rating: 4.2,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 3,
    name: 'Headphones',
    price: 99.99,
    description: 'Noise-cancelling headphones',
    weight: 0.75,
    source: 'walmart',
    image: '/3.webp?height=200&width=200',
    rating: 4.2,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 4,
    name: 'Tablet',
    price: 299.99,
    description: '10-inch tablet',
    weight: 1.0,
    source: 'ctenvios',
    image: '/4.webp?height=200&width=200',
    rating: 4.2,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Fitness tracker watch',
    weight: 0.25,
    source: 'amazon',
    image: '/slider3.jpg?height=200&width=200',
    rating: 4.2,
    category: 'Electronics',
    stock: 10,
  },
  {
    id: 6,
    name: 'Camera',
    price: 599.99,
    description: 'Digital SLR camera',
    weight: 1.5,
    source: 'walmart',
    image: '/slider4.jpg?height=200&width=200',
    rating: 4.2,
    category: 'Electronics',
    stock: 10,
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

export default function ProductsList() {
  const { filter, addToCart, removeFromCart, getCartQuantity, setFilter } =
    useCartStore();

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((product) => product.source === filter);

  return (
    <div className=" lg:p-4 ">
      <p className="text-base font-semibold leading-7  text-sky-800">
        Compra Online
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Tu solo compra, nosotros nos encargamos del resto
      </h1>
      {/*   <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Select
            value={filter}
            onValueChange={(value: any) => setFilter(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Sold By</SelectItem>
              <SelectItem value="ctenvios">Our Products</SelectItem>
              <SelectItem value="amazon">Amazon Products</SelectItem>
              <SelectItem value="walmart">Walmart Products</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header> */}

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
            <CardContent className="flex-grow  p-4 pt-0">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">
                  {product.weight} lbs
                </p>
              </div>{' '}
              <div className="mt-2 flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating}
                </span>
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
