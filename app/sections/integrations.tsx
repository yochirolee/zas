'use client';

import { useEffect, useRef } from 'react';
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';

const cardImage = [
  {
    id: 1,
    title: 'Karl Johans gate 5',
    link: '#',
    image: 'https://avatar.vercel.sh/tom',
  },
  {
    id: 2,
    title: 'Akersgata 16',
    link: '#',
    image: 'https://avatar.vercel.sh/emily',
  },
  {
    id: 3,
    title: 'Storgata 10',
    link: '#',
    image: 'https://avatar.vercel.sh/chris',
  },
  {
    id: 4,
    title: 'Prinsens gate 8',
    link: '#',
    image: 'https://avatar.vercel.sh/sophie',
  },
  {
    id: 5,
    title: 'Rådhusgata 2',
    link: '#',
    image: 'https://avatar.vercel.sh/scott',
  },
  {
    id: 6,
    title: 'Dronningens gate 16',
    link: '#',
    image: 'https://avatar.vercel.sh/olivia',
  },
  {
    id: 7,
    title: 'Kirkegata 15',
    link: '#',
    image: 'https://avatar.vercel.sh/evan',
  },
  {
    id: 8,
    title: 'Torggata 21',
    link: '#',
    image: 'https://avatar.vercel.sh/grace',
  },
  {
    id: 9,
    title: 'Bislettgata 12',
    link: '#',
    image: 'https://avatar.vercel.sh/van',
  },
];

export function IntegrationsSectionLanding() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const handleConfettiClick = () => {
    
  };

  return (
    <div className="flex h-full transform-gpu  flex-col items-center justify-between gap-5 rounded-lg border border-neutral-200 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] xl:flex-row">
      <div className="flex w-full flex-col items-start justify-between gap-y-10 p-10 xl:h-full xl:w-1/2">
        <h2 className="text-3xl font-semibold">
          Propdock gjør det enkelt å ha finasiell oversikt over dine eiendommer{' '}
        </h2>
        <a
          href="/dashboard"
          className="text-base font-normal text-gray-500 underline-offset-4 transition-all hover:underline"
        >
          Start gratis nå
        </a>
      </div>
      <div className="relative w-full overflow-hidden xl:w-1/2">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 bg-gradient-to-b from-white dark:from-black"></div>
        <div
          ref={containerRef}
          className="relative -right-[50px] -top-[100px] grid max-h-[450px] grid-cols-3 gap-5 [transform:rotate(-15deg)translateZ(10px);]"
        >
          <AnimatePresence>
            {cardImage.map((card, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.96, y: 25 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transition: {
                    duration: 0.1,
                    ease: cubicBezier(0.22, 1, 0.36, 1),
                  },
                }}
                transition={{
                  duration: 0.2,
                  ease: cubicBezier(0.22, 1, 0.36, 1),
                  delay: index * 0.04,
                }}
                key={card.id}
                className="flex flex-col items-center gap-y-2 rounded-md border bg-white/5 p-5"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="text-sm dark:text-neutral-200/50">{card.title}</p>
                <a
                  onClick={handleConfettiClick}
                  className="rounded-md border border-neutral-700/50 bg-neutral-600 p-2 py-0.5 text-white shadow-xl drop-shadow-lg hover:bg-neutral-500 dark:border-neutral-400/20 dark:bg-gray-500"
                >
                  Se mer
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
