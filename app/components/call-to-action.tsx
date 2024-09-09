'use client';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import ShipBanner from './banner/ship-banner';

export const ShadowBg1 = () => {
  return (
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5074eb] to-[#0a82dec0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
};

export const ShadowBg2 = () => {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
    </div>
  );
};

export default function CallToAction() {
  return (
    <section className="  md:py-24 lg:py-32">
      <ShadowBg1 />

      <div className="mx-auto lg:container lg:max-w-7xl ">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
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

              <CarouselItem className="">
                <ShipBanner />
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

          <div className=" relative mx-auto px-4 text-center  ">
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
              Envios a toda Cuba
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos una Empresa de logística internacional, especializada en
              envíos de cargas marítimas y aéreas a toda Cuba, con mas de 20
              años de experiencia en el sector
            </p>
            <div className=" mx-auto mt-10 text-center sm:mb-8 sm:flex sm:justify-center">
              <div className="relative  flex justify-center  gap-2  rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1  ring-gray-900/10 hover:ring-gray-900/20">
                <span className="hidden md:inline-flex">
                  Estamos ubicados en{' '}
                </span>
                10230 NW 80th Ave. Hialeah Gardens .
                <Link
                  href="https://www.google.com/maps/place/CTEnvios.+Envios+a+Cuba/@25.8675816,-80.3278302,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x88d9bb702273d979:0x35fce58bb3908f86!2sCTEnvios.+Envios+a+Cuba!8m2!3d25.8675804!4d-80.3271865!16s%2Fg%2F11kjzkr9zf!3m5!1s0x88d9bb702273d979:0x35fce58bb3908f86!8m2!3d25.8675804!4d-80.3271865!16s%2Fg%2F11kjzkr9zf?hl=es-419"
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />

                  <span aria-hidden="true">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://api.whatsapp.com/send?phone=%2B17542778810&data=AWCHK2enYTDFDGMl_C4WA-bU40pq2QeXbNy1Sy7ChnJantSaLPPYdb9OC4HK7-TXb4PUCw98TQsnV2uXOr4AHR8w7oKLusK52IM_7hQJqn-TKg36Y5KSPvQKVYyehzFbmSiDmcw6C3U2V_h6L2GUxzYviilHWyCEetBiYEYg8xsJ5Bwf4XzAto8JhiDGWmfZdXuopzwfJzIS1WSmWMp9-_Vk9rfhD4IyFq-jtsLWgY3Zr3O3kjmG4eOBdWssT8hI_RtD5_pM10XEXowaTTyD_xuVKsQ8d62vxfbpRpJBWlj1XgU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0gA2hkfBC9mgbWIaX9XRjAiFZdRwxPDIaH0Frad0oE4jUD1Ae2jteu4sA"
                className="flex  items-center   rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                <MdOutlineWhatsapp className="mx-2 h-auto w-6" />
                <span className="text-white">Contactanos</span>
              </Link>

              <Link
                href="/tracking"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Tracking de su Envio<span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ShadowBg2 />
    </section>
  );
}
