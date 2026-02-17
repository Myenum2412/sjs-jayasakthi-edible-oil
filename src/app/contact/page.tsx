import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Skeleton } from '@/components/skeleton';
import { generateMetadata as generateBaseMetadata } from '@/lib/meta';

// Lazy load components for better code splitting
const ContactPageSection = dynamic(() => import('@/components/Contact/ContactPageSection'), {
  loading: () => (
    <div className="space-y-8 py-16">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-64 w-full" />
    </div>
  ),
  ssr: true,
});

const Faq2 = lazy(() => import('@/components/mvpblocks/faq-2'));

export const metadata = generateBaseMetadata({
  title: 'Contact Sri Jayasakthi Edible Oils | Visit Us in Salem',
  description: "Have questions? Contact Salem's top edible oil manufacturer. Visit our Kandhampatty office for bulk orders and inquiries. Proudly serving Salem, Tamil Nadu.",
  keywords: 'contact Sri Jayasakthi Salem, edible oil factory Salem, oil supplier Kandhampatty Salem, customer service Salem',
  url: '/contact',
});

export default function ContactPage() {
  return (
    <MaxWidthWrapper>
      <ContactPageSection />
      <Suspense fallback={<Skeleton className="h-96 w-full rounded-lg mt-8" />}>
        <Faq2 />
      </Suspense>
    </MaxWidthWrapper>
  );
}

