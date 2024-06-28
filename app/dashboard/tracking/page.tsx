import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import ParcelTables from '@/app/ui/tracking/table';
import { Suspense } from 'react';

export default function TrackingPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold">Tracking</h1>
      <div className="mt-6">
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <ParcelTables />
        </Suspense>
      </div>
    </div>
  );
}
