'use client';

import React, { forwardRef, useRef } from 'react';

import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import {
  Box,
  BoxIcon,
  MapPinIcon,

  Truck,
 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function AnimatedBeamDistribution({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border  p-10 md:shadow-xl',
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="relative size-16">
            <Truck className="h-6 w-6 text-fuchsia-700" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div
            className="z-10 inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-xs shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div1Ref}
          >
            <BoxIcon className="h-5 w-5 animate-pulse text-sky-600" />
            La Habana
          </div>
          <div
            className="z-10 inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-xs shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div2Ref}
          >
            <MapPinIcon className="h-5 w-5 animate-pulse text-sky-600" />
            Matanzas
          </div>
          <div
            className="z-10 inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-xs shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div3Ref}
          >
            <MapPinIcon className="h-5 w-5 animate-pulse text-sky-600" />
            Villa Clara
          </div>
          <div
            className="z-10 inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-xs shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div4Ref}
          >
            <MapPinIcon className="h-5 w-5 animate-pulse text-sky-600" />
            Holguin
          </div>
          <div
            className="z-10 inline-flex items-center gap-2 rounded-lg border bg-white p-2 text-xs shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
            ref={div5Ref}
          >
            <MapPinIcon className="h-5 w-5 animate-pulse text-sky-600" />
            Santiago de Cuba
          </div>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={5}
      />
    </div>
  );
}

const Icons = {
  Box: () => <Box className="animate-pulse text-sky-700" />,

  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
