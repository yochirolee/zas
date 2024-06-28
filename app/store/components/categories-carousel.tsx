import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { GlassWater } from 'lucide-react';

export function CategoriesCarousel() {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="relative m-auto mx-20 mb-12 mt-8 max-h-[300px] w-full  px-10 lg:mb-14 lg:mt-12 xl:mb-16 xl:mt-16"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 ">
            <div className="p-1">
              <Card className="bg-muted/80">
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <GlassWater className="h-12 w-12" />
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
