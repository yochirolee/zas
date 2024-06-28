'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Package, Search } from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Products', href: '/dashboard/products', icon: Package },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex-1 border-r">
      <nav className="grid gap-2 px-2 text-lg font-medium text-gray-900">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                ' mx-3 flex items-center gap-4 rounded-xl px-3 py-2 text-gray-900 text-muted-foreground hover:text-foreground',
                {
                  'bg-gray-100 text-gray-900': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-5 text-gray-700" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
/*  <Link
   href="#"
   className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
 >
   <Home className="h-4 w-4" />
   Dashboard
 </Link>; */
