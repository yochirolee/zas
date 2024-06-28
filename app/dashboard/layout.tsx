import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import SideNav from '../ui/dashboard/sidenav';
import MobileSideNav from '../ui/dashboard/mobile-side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r  md:block">
        <SideNav />
      </div>
      <div className="flex flex-col border-r">
        <MobileSideNav />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* <div className="flex items-center">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div> */}

          {children}
        </main>
      </div>
    </div>
  );
}

/*  <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
   <div className="flex items-center">
     <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
   </div>
   <div
     className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
     x-chunk="dashboard-02-chunk-1"
   >
     <div className="flex flex-col items-center gap-1 text-center">
       <h3 className="text-2xl font-bold tracking-tight">
         You have no products
       </h3>
       <p className="text-sm text-muted-foreground">
         You can start selling as soon as you add a product.
       </p>
       <Button className="mt-4">Add Product</Button>
     </div>
   </div>
 </main>;
 */
