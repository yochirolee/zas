'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProductsList from '@/app/components/products-list';

// Mock product data
const allProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79.99,
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.2,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Portable Charger',
    price: 39.99,
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 59.99,
    rating: 4.3,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Electronics',
  },
  {
    id: 5,
    name: 'Laptop Backpack',
    price: 49.99,
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Clothing',
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    price: 89.99,
    rating: 4.4,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Electronics',
  },
  {
    id: 7,
    name: 'Novel: The Great Adventure',
    price: 14.99,
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Books',
  },
  {
    id: 8,
    name: 'Coffee Maker',
    price: 79.99,
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Home & Kitchen',
  },
  {
    id: 9,
    name: 'Board Game Set',
    price: 29.99,
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Toys & Games',
  },
  {
    id: 10,
    name: 'Skincare Set',
    price: 49.99,
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Beauty & Personal Care',
  },
  {
    id: 11,
    name: 'Yoga Mat',
    price: 24.99,
    rating: 4.4,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Sports & Outdoors',
  },
];

const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Books',
  'Home & Kitchen',
  'Toys & Games',
  'Beauty & Personal Care',
  'Sports & Outdoors',
];

// Simulated API call
const fetchProducts = (searchTerm: string, category: string) => {
  return new Promise<typeof allProducts>((resolve) => {
    setTimeout(() => {
      let filteredProducts = allProducts;

      if (searchTerm) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      if (category && category !== 'All') {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category,
        );
      }

      resolve(filteredProducts);
    }, 500); // Simulate network delay
  });
};

export default function Component() {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const results = await fetchProducts(searchTerm, selectedCategory);
      setProducts(results);
      setIsLoading(false);
    };

    fetchData();
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The search is already triggered by the useEffect hook
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1">
        <aside className="hidden w-64 bg-muted p-6 md:block">
          <h2 className="mb-4 font-semibold">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Button
                  variant={category === selectedCategory ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex-1 p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
            </div>
          ) : (
            <ProductsList />
          )}
        </section>
      </main>
      <footer className="bg-muted px-6 py-6 text-center">
        <p>&copy; 2024 CTEnvios. All rights reserved.</p>
      </footer>
    </div>
  );
}
