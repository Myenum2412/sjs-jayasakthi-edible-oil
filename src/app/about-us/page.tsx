import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Skeleton } from '@/components/skeleton';
import { generateMetadata as generateBaseMetadata } from '@/lib/meta';

// Lazy load component for better code splitting
const AboutUsSection = dynamic(() => import('@/components/About-Us/AboutUsSection'), {
  loading: () => (
    <div className="space-y-8 py-16">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  ),
  ssr: true,
});

export const metadata = generateBaseMetadata({
  title: 'About Us',
  description: 'Learn about Sri Jayasakthi Edible Oils Pvt. Ltd - A trusted manufacturer and supplier of premium edible oils in India. Our commitment to quality and excellence.',
  keywords: 'about us, Sri Jayasakthi, edible oils manufacturer, company history, quality commitment',
  url: '/about-us',
});

export default function AboutUsPage() {
  return (
    <MaxWidthWrapper>
      <AboutUsSection />
    </MaxWidthWrapper>
  );
}