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
  title: 'Contact Us',
  description: 'Get in touch with Sri Jayasakthi Edible Oils Pvt. Ltd. Contact us for inquiries, bulk orders, or any questions about our premium edible oils.',
  keywords: 'contact, customer service, inquiry, bulk order, Sri Jayasakthi contact',
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

