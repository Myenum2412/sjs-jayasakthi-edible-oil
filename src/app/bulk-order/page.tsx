import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Skeleton } from '@/components/skeleton';
import { generateMetadata as generateBaseMetadata } from '@/lib/meta';

export const metadata = generateBaseMetadata({
  title: 'Wholesale Edible Oils in Salem | Bulk Order Sri Jayasakthi',
  description: 'Need bulk cooking oils for your business in Salem? Sri Jayasakthi offers competitive wholesale pricing for coconut, sunflower, and palm oils. Get a quote today!',
  keywords: 'bulk order, wholesale, wholesale edible oils Salem, bulk oil suppliers Salem, cooking oil distributor Salem',
  url: '/bulk-order',
});

// Lazy load heavy components with skeleton fallbacks
const BulkOrderSection = dynamic(
  () => import('@/components/Bulk-order/BulkOrderSection'),
  {
    loading: () => (
      <div className="space-y-8 py-20">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-6 w-full max-w-2xl" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    ),
    ssr: true,
  }
);

export default function BulkOrderPage() {
  return (
    <MaxWidthWrapper>
      <BulkOrderSection />
    </MaxWidthWrapper>
  );
}
