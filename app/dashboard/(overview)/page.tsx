import { Card } from '../../ui/cards';
import RevenueChart from '../../ui/revenue-chart';
import LatestInvoices from '../../ui/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dashboard',
};


import { fetchCardData } from '@/app/lib/data';
import CardWrapper from '@/app/ui/cards';
import { Suspense } from 'react';

import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardsSkeleton,} from '@/app/ui/skeletons';
 
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}