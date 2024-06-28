import AcmeLogo from '@/app/ui/acme-logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import avatar from '@/public/avatar.png';
import logo from '@/public/zaslogo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="store-header" className="relative z-40 h-16 w-full    lg:h-16">
      <div className=" body-font fixed z-20 h-16 w-full   bg-white px-4 text-gray-700 shadow-sm transition duration-200 ease-in-out sm:h-16 lg:h-16 ">
        <div className="mx-auto flex h-full max-w-[1920px]  items-center justify-between">
          <Image
            src={logo}
            alt="Zas Logo"
            width={80}
            height={80}
            className="lg:h-26 lg:w-26"
          />

          <div className=" hidden items-center space-x-2 md:flex ">
            <div className=" flex items-center ">
              <div className="relative   cursor-pointer p-2">
                <Search className="h-6 w-6" />
              </div>
              <div className="relative   cursor-pointer p-2">
                <ShoppingBag className="h-6 w-6 " />
                <span className="absolute right-0  top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 p-1    text-xs text-white">
                  0
                </span>
              </div>

              <Button variant="ghost">Sign In</Button>
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
              <div className="relative   cursor-pointer p-2">
                <ShoppingBag className="h-6 w-6 " />
                <span className="absolute right-0  top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 p-1    text-xs text-white">
                  0
                </span>
              </div>
              <div className="h-6 w-6 ml-4">
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
