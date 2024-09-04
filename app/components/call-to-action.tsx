import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function CallToAction() {
  return (
    <section className=" bg-[#f5f5f5]  md:py-24 lg:py-32">
      <div className="mx-auto lg:container lg:max-w-7xl ">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <Carousel className="mx-auto w-full max-w-lg">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/slider4.jpg"
                    width="500"
                    height="500"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden object-fill object-center sm:w-full lg:rounded-xl"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
              <div className="mt-6 flex w-full justify-center gap-4 ">
                <div className="h-2 w-4 rounded-full   bg-gray-700 shadow-md"></div>
                <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                <div className="h-2 w-2 rounded-full bg-gray-600"></div>
              </div>
            </Carousel>
          </div>
          <div className="relative space-y-4 p-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Envios a Cuba
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Envíe sus productos a Cuba de forma rápida y segura.
              <br />
              Con más de 10 años de trayectoria en el envío de mercancías a
              Cuba.
            </p>
            <Link
              href="/store"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={true}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
