'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BorderBeam } from '@/components/ui/border-beam';
import Prices from './prices';

export const HeroRight = () => {
  return (
    <div className=" relative mx-auto w-full rounded-lg  px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center p-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/*   <div className="grid grid-cols-2 items-center justify-center lg:grid-cols-3  lg:gap-x-6 lg:space-y-0">
          <motion.div
            animate={{ x: [0, 100, 0] }}
            style={{ x: 0, rotate: -25 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1   relative hidden h-48 w-48 -rotate-12 overflow-hidden  rounded-lg  bg-white group-hover:opacity-75 sm:h-64 md:h-60 md:w-48 lg:block lg:max-h-80 lg:w-44"
          >
            <Image
              src="/slider4.webp"
              className="aspect-[4/5] object-cover object-center lg:block lg:h-full lg:w-full"
              height={500}
              width={300}
              alt="Envios a cuba"
            />
          </motion.div>

          <div className="sm:aspect-h-1 sm:aspect-w-2   lg:aspect-h-1 lg:aspect-w-1 relative h-48 w-48 overflow-hidden  rounded-lg bg-white group-hover:opacity-75 sm:h-64 md:h-60 md:w-48 lg:max-h-80 lg:w-44">
            <Image
              src="/truck.webp"
              className="h-72 object-cover  object-center lg:block"
              height={200}
              width={200}
              alt="Track Entregas Cuba"
            />
          </div>

          <motion.div
            animate={{ x: [0, 50, 0] }}
            style={{ x: 0, rotate: 25 }}
            transition={{ ease: 'easeIn', duration: 4 }}
            className="sm:aspect-h-1  sm:aspect-w-2   lg:aspect-h-1  lg:aspect-w-1 relative h-48 w-48 rotate-12 overflow-hidden rounded-lg  group-hover:opacity-75 sm:h-64 md:h-60 md:w-48 lg:max-h-80 lg:w-44"
          >
            <Image
              src="/happy_cuban.webp"
              className="h-72 object-cover  object-center lg:block"
              height={200}
              width={200}
              alt="Familia Cubana, Envios"
            />
          </motion.div>
        </div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Prices />
      </motion.div>

      {/*   <div className="pt-2">
        <p className="my-8 text-center  text-lg font-semibold">
          Hasta la Puerta de su Casa!
        </p>
        <div className="relative mt-4 bg-white ">
          <a
            className="group -my-4 mx-auto  items-center  gap-2 rounded-full bg-white/25 px-3 py-2 text-center text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex  lg:hidden xl:flex"
            href="/"
          >
            <span className="font-semibold ">Seguridad y Garantia</span>

            <span className="font-medium">
              <span className="md:hidden">Lideres en el Sector</span>
              <span className="hidden md:inline">
                Lideres en el Sector de Paqueteria a Cuba
              </span>
            </span>
          </a>
        </div>
      </div> */}
    </div>
  );
};
