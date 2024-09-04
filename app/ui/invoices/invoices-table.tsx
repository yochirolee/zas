import { fetchFilteredInvoices } from '@/app/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import InvoiceStatus from './status';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import { DeleteInvoice, UpdateInvoice } from './buttons';

export default async function InvoicesTable2({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <Card className="mt-8">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map((invoice, index) => (
              <TableRow className="" key={index}>
                <TableCell className="flex items-center ">
                  <Image
                    src={invoice.image_url}
                    className="mr-4 rounded-full"
                    width={28}
                    height={28}
                    alt={`${invoice.name}'s profile picture`}
                  />
                  <div>
                    <div className="font-medium">{invoice.name}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {invoice.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <InvoiceStatus status={invoice.status} />
                </TableCell>

                <TableCell className="hidden md:table-cell">
                  {formatDateToLocal(invoice.date)}
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(invoice.amount)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
