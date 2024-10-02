import React from 'react';
import Link from 'next/link';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { MapPinIcon } from 'lucide-react';
export const HeroLeft = () => {
  return (
    <div className=" mx-auto  px-4 text-center  ">
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
        Envios a toda Cuba
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Somos una Empresa de logística internacional, especializada en envíos de
        cargas marítimas y aéreas a toda Cuba, con mas de 20 años de experiencia
        en el sector
      </p>
      <div className=" mx-auto mt-10 text-center sm:mb-8 sm:flex sm:justify-center">
        <div className="relative  flex justify-center  gap-2  rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1  ring-gray-900/10 hover:ring-gray-900/20">
          <span className="hidden md:inline-flex">Estamos ubicados en </span>
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
  );
};
