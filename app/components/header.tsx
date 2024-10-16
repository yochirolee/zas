import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './cart';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Tracking', href: '/tracking' },
  { name: 'Preguntas Frecuentes', href: '/#faq' },
];

export default function Header() {
  return (
    <header id="store-header">
      <div className=" body-font  h-16  px-4 text-gray-700  transition duration-200 ease-in-out sm:h-16 lg:h-16 ">
        <div className="mx-auto flex h-full   items-center justify-between">
          <Link href="/">
            <Image
              src="/ctelogo.png"
              alt="CTENvios Logo"
              width={400}
              height={400}
              className="h-12 w-12 object-scale-down object-center"
              priority
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </Link>

          {/* Destktop */}
          <div className=" hidden w-full items-center justify-between space-x-2 md:flex ">
            <div className="mx-auto hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <div className="relative   cursor-pointer p-2">
                <Search className="h-6 w-6" />
              </div>
              <div className="relative   cursor-pointer p-2">
                <Cart />
              </div>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>

              {/*   <Button>
                <Link prefetch={true} href="/dashboard">
                  Dashboard
                </Link>
              </Button> */}
            </div>
          </div>
          {/* Mobile */}
          <div className=" flex items-center  space-x-2 md:hidden ">
            <div className="mx-2 inline-flex px-3">
              <Cart />

              <div className="w- ml-4 h-5">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
