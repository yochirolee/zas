import ProductCard from './components/product-card';
import CallToAction from './components/call-to-action';
import { BoxCard } from './components/box-card';
import { ScrollAreaHorizontalDemo } from './components/main-carousel';
import { ScrollAreaHorizontalDemo2 } from './components/second-carousel';
import ProductsList from './components/products-list';

export default function Page() {
  return (
    <div className=" mx-auto w-full  ">
      <CallToAction />

      <section className="container  mx-auto p-4">
        <div className="mb-8 flex flex-col">
          <h1 className="text-2xl font-bold">Crea tu Caja</h1>
          <p>Crea tu caja con los productos que necesites</p>
        </div>
        <div className="mx-auto grid justify-center  gap-2   sm:grid-cols-2 lg:grid-cols-3    ">
          <BoxCard />
          <BoxCard />
          <BoxCard />
        </div>
      </section>

      <ProductsList />
      {/*  <ScrollAreaHorizontalDemo />
      <ScrollAreaHorizontalDemo2 />

      <CategoriesCarousel /> */}
      {/*   
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="mx-auto mb-12 pb-0.5 md:-mt-2.5 md:mb-14 md:pb-0 lg:pb-1 xl:mb-16 xl:pb-0">
          <Image
            src={banner10}
            alt="banner10"
            width={600}
            height={400}
            className="mt-10 h-full w-full rounded-xl object-cover"
          />
        </div>

        <FeaturedProducts />

        <div className=" mb-12 grid max-w-[1920px] grid-cols-2 gap-2 sm:grid-cols-9 md:mb-14 md:gap-2.5 xl:mb-16">
          <div className="col-span-5 flex h-full w-full">
            <div className="col-span-full mx-auto sm:col-span-5">
              <Image
                src={banner7}
                alt="banner7"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-4 flex h-full w-full  ">
            <div className="grid grid-flow-col grid-cols-2 gap-8">
              <div>
                <Image
                  src={banner8}
                  alt="banner8"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <Image
                src={banner9}
                alt="banner7"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-14 xl:mb-16">
          <div className="3xl:mb-8 -mt-2 mb-4 flex items-center justify-between pb-0.5 md:mb-5 lg:mb-6 2xl:mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Categories
            </h2>
          </div>
          <CategoriesCarousel />
        </div>

        <div className="mb-12 md:mb-14 xl:mb-16">
          <div className="3xl:mb-8 -mt-2 mb-4 flex items-center justify-between pb-0.5 md:mb-5 lg:mb-6 2xl:mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Features Products
            </h2>
          </div>
        </div>

        <div className="mb-20 grid  grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
          <div className="group relative col-span-full row-span-full flex cursor-pointer flex-col items-center justify-between overflow-hidden rounded-md bg-gray-200 lg:col-span-2 lg:row-span-2">
            <div
              className="3xl:min-h-[330px] flex h-full items-center justify-center p-4"
              title="Nike Bag"
            >
              <Image src={image1} alt="image1" />
            </div>
          </div>
          <div className="group relative col-span-2 flex cursor-pointer flex-col items-center justify-between overflow-hidden rounded-md bg-gray-200 lg:col-span-1">
            <Image src={image3} alt="image1" />
          </div>
          <div className="group relative col-span-2 flex cursor-pointer flex-col items-center justify-between overflow-hidden rounded-md bg-gray-200 lg:col-span-1 lg:row-span-2">
            <div
              className="3xl:min-h-[330px] flex h-full items-center justify-center p-4"
              title="Nike Leader VT"
            >
              <Image src={image2} height={620} width={620} alt="image1" />
            </div>
          </div>
          <div className="group relative col-span-2 flex cursor-pointer flex-col items-center justify-between overflow-hidden rounded-md bg-gray-200 lg:col-span-1">
            <Image src={image4} alt="image1" />
          </div>
        </div>

        <div className="mx-auto mb-12 pb-0.5 md:-mt-2.5 md:mb-14 md:pb-0 lg:pb-1 xl:mb-16 xl:pb-0">
          <Image
            src={banner10}
            alt="banner10"
            width={600}
            height={400}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex h-20 w-full items-center justify-center bg-gray-200">
          <div className="flex items-center justify-center">
            <p className="text-xs font-semibold text-gray-700">
              © 2022 All rights reserved
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
