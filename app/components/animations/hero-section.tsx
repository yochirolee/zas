'use client';

import { useRef } from 'react';

import { useInView } from 'framer-motion';
import TextShimmer from './text-shimmer';
import { ArrowRight } from 'lucide-react';
import { BorderBeam } from './border-beam';

export default function HeroSectionNew2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section
      id="hero"
      className="gb-gray-50 relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div
        ref={ref}
        className="animate-fade-up relative mt-[8rem] opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-gray-500 bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
            inView ? 'before:animate-image-glow' : ''
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />

          <img
            src="/map.jpg"
            alt="Hero Image"
            className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:block"
          />
          <img
            src="/map.jpg"
            alt="Hero Image"
            className="relative block h-full w-full  rounded-[inherit] border object-contain dark:hidden"
          />
        </div>
      </div>
    </section>
  );
}
