'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapIcon,
  MapPinIcon,
  PiIcon,
  ShoppingBag,
  ShoppingCart,
  Star,
} from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative w-full max-w-4xl  overflow-hidden rounded-lg shadow-lg col-span-2 lg:my-12">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{
            background: isHovered
              ? [
                  'linear-gradient(to right, #8B5CF6, #EC4899)',
                  'linear-gradient(to right, #EC4899, #8B5CF6)',
                ]
              : ['linear-gradient(to right, #8B5CF6, #EC4899)'],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />

        <div className="relative flex items-center justify-between p-8">
          {/* Product information */}
          <div className="z-10 max-w-lg text-white">
            <h2 className="mb-4 text-4xl font-bold">
              Visita nuestro catálogo
            </h2>
            <p className="mb-6 text-lg">
              Encuentra todo lo que buscas en un solo lugar.
              
            </p>
            <div className="mb-6 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-current text-yellow-400"
                />
              ))}
              <span className="ml-2 text-sm">(250+ Customers Reviews)</span>
            </div>
            <Link href="/store">
              <motion.button
                className="rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Comienza a comprar
              </motion.button>
            </Link>
          </div>

          {/* Product image */}
          <motion.div
            className="relative z-10 hidden md:block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingBag className="h-64 w-64 animate-pulse rounded-lg object-cover text-white" />
            <motion.div
              className="absolute left-0 top-0 h-full w-full rounded-full bg-white opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-4 w-4 rounded-full bg-white opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
      <div className="relative hidden md:flex w-full max-w-2xl  items-center overflow-hidden rounded-lg shadow-lg lg:my-12">
        <div className="relative flex items-center justify-between p-8">
          {/* Product information */}

          <div className="z-10 flex max-w-lg flex-col items-center">
            <MapPinIcon className="my-4 h-12 w-12 animate-bounce text-indigo-600" />
            <h2 className="mb-4 text-xl font-bold">
              Nuestro sistema de tracking
            </h2>
            <p className="mb-6 text-lg">
              Permite seguir el estado de tu pedido en tiempo real, desde el
              momento en que se realiza hasta que es entregado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
