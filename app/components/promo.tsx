import Image from 'next/image';

export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-white ">
      <div className="grid grid-cols-12  ">
        <div className="col-span-6 flex  items-center justify-center ">
          <div className=" pb-80 pt-20 sm:max-w-lg sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              CTEnvios.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesnt care if you live or die.
            </p>
            <a
              href="#"
              className="mt-20 inline-block rounded-md border border-transparent bg-blue-500   px-8 py-3 text-center font-medium text-gray-900 hover:bg-blue-700"
            >
              Shop Collection
            </a>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center ">
          <div className="h-full w-full bg-gradient-to-r from-sky-500  to-blue-500">
            <Image
              src="/slider4.jpg"
              alt="Promo"
              width={500}
              height={500}
              className="h-full w-full object-scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
