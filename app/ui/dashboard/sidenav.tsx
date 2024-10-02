'use client';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from '@/app/lib/nav-links';
import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  ShoppingCart,
  Package,
  Users,
  CreditCard,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

export default function SideNav() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  return (
    <aside
      className={`min-h-screen w-64 border-r border-gray-100  ${sidebarOpen ? 'block' : 'hidden'} md:block`}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex min-h-48 flex-col items-center justify-center space-x-2  bg-gradient-to-b    from-gray-100 to-gray-50">
          <Avatar className="h-20 w-20 space-x-2">
            <AvatarImage src={logo} alt="logo" />
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <div className=" font-bold">yleecruz@gmail.com</div>
          <Badge variant="outline">Admin</Badge>
        </div>
      </div>
      <nav className="mt-4 flex flex-col space-y-2 p-2">
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              <Button
                variant="ghost"
                className={clsx(
                  'w-full justify-start',
                  pathname === link.href && 'bg-gray-100 text-primary',
                )}
                onClick={() => setActiveSection(link.name)}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
