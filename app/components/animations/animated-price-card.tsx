'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ArrowRight, CheckIcon } from 'lucide-react';

export default function AnimatedPriceCard() {
  const [isHovered, setIsHovered] = useState(false);
  const pricePerPound = 1.99;
  const currency = '$';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="lg:w-/3  relative z-10 mx-2 rounded-lg shadow-lg  ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:flex-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -bottom-px left-1/2 -ml-48 flex h-[2px] w-96">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
        <CardHeader className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold text-slate-700">
              Tarifa de Envío
            </CardTitle>
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Package className="h-8 w-8" />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <motion.div
            className="text-center"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <div className="mb-2 bg-gradient-to-r from-[#0EA5E9] to-blue-600 bg-clip-text text-7xl font-bold  text-transparent">
              {currency}
              {pricePerPound.toFixed(2)}
            </div>
            <div className="text-end text-xl text-[#0EA5E9] dark:text-purple-300">
              por Libra
            </div>
          </motion.div>
          <motion.div
            className="mt-6 text-sm text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
              {[
                'Envios Rapidos y Seguros',
                'Tracking Incluido',
                `Aseguramos su carga `,
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckIcon className="h-4 w-4 text-purple-500" />
                  <span className="font-semibold text-slate-900">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </CardContent>
        <motion.div
          className="rounded-b-lg bg-purple-100 p-4  text-center text-sm text-purple-700 dark:bg-purple-800 dark:text-purple-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          *Se pueden aplicar cargos adicionales para artículos de gran tamaño
        </motion.div>
      </Card>
    </motion.div>
  );
}
