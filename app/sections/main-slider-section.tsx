'use client';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import CallToAction from './call-to-action';
import TrackingSection from './tracking-section';

export default function MainSliderSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const slides = [<CallToAction />, <TrackingSection />];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.previousScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (!api || !autoplay) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 500);

    return () => clearInterval(intervalId);
  }, [api, autoplay]);

  return (
    <Carousel
      className="h-full w-full"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>{slide}</CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex w-full justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? ' bg-gray-700 shadow-md' : 'w-4 bg-gray-600'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
