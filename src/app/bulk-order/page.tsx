import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Skeleton } from '@/components/skeleton';
import { generateMetadata as generateBaseMetadata } from '@/lib/meta';

// Lazy load component for better code splitting
const BulkOrderSection = dynamic(() => import('@/components/Bulk-order/BulkOrderSection'), {
  loading: () => (
    <div className="space-y-8 py-16">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-96 w-full" />
    </div>
  ),
  ssr: true,
});

export const metadata = generateBaseMetadata({
  title: 'Bulk Order',
  description: 'Place bulk orders for premium edible oils with Sri Jayasakthi Edible Oils Pvt. Ltd. Competitive prices for wholesale orders. Get a quote today.',
  keywords: 'bulk order, wholesale, edible oils bulk, distributor, Sri Jayasakthi bulk order',
  url: '/bulk-order',
});

export default function BulkOrderPage() {
  return (
    <MaxWidthWrapper>
      <BulkOrderSection />
    </MaxWidthWrapper>
  );
}
