import { fetchLatestInvoices } from '@/app/lib/data';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <Card>
        <CardHeader>
          <CardTitle>Latest Invoices</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {latestInvoices.map((invoice, i) => (
            <div key={i} className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src={invoice.image_url} alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {invoice.name}
                </p>
                <p className="text-muted-foreground text-sm">{invoice.email}</p>
              </div>
              <div className="ml-auto font-medium">{invoice.amount}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
