'use client';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import Image from 'next/image';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from '@/app/lib/nav-links';

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center justify-left border-b px-4 lg:h-[60px] lg:px-2">
        <Link href="/dashboard" className=" flex gap-2 font-semibold">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="h-12 w-12 "
          />
        </Link>
      </div>
      <div className="min-h-40 bg-gray-100">
        <div className="flex h-20 items-center justify-center">
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits " />
          </Avatar>
        </div>
      </div>

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
                <LinkIcon className="h-5 w-5" />

                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
