import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Search, Settings, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/ctelogo.png';
import Link from 'next/link';
import Cart from './cart';

export default function Header() {
  return (
    <header id="store-header" className="relative z-40 h-16 w-full    lg:h-16">
      <div className=" body-font fixed z-20 h-16 w-full   bg-white px-4 text-gray-700 shadow-sm transition duration-200 ease-in-out sm:h-16 lg:h-16 ">
        <div className="mx-auto flex h-full max-w-[1920px]  items-center justify-between">
          <Image
            src={logo}
            alt="CTENvios Logo"
            width={40}
            height={40}
            className="object-scale-down lg:h-16 lg:w-16"
          />

          <div className=" hidden items-center space-x-2 md:flex ">
            <div className=" flex items-center ">
              <div className="relative   cursor-pointer p-2">
                <Search className="h-6 w-6" />
              </div>
              <div className="relative   cursor-pointer p-2">
                <Cart />
              </div>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
            </div>

            <Button>
              <Link prefetch={true} href="/dashboard">
                Dashboard
              </Link>
            </Button>
          </div>
          <div className=" flex items-center  space-x-2 md:hidden ">
            <div className="mx-2 inline-flex px-3">
              <div className="relative   cursor-pointer p-2">
                <Search className="h-6 w-6" />
              </div>

              <Link
                prefetch={true}
                href="/dashboard"
                className="relative   cursor-pointer p-2"
              >
                <Settings className="h-6 w-6 " />
              </Link>
              <div className="ml-4 h-6 w-6">
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
