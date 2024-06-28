import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import logo from '@/public/zaslogo.png';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function SideNav() {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          <Image
            src={logo}
            width={20}
            height={20}
            alt="logo"
            className="h-20 w-20 rotate-[16deg]"
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
      <NavLinks />
    {/*   <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
