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
  title: "About Sri Jayasakthi Edible Oils - Salem's Trusted Brand",
  description: "A legacy of purity since 1985. Learn how Sri Jayasakthi became a leading manufacturer of quality cooking oils in Salem, Tamil Nadu. Trusted by generations in Salem.",
  keywords: "about us, Sri Jayasakthi, edible oil manufacturer Salem, pure oil company Salem, Tamil Nadu oil suppliers",
  url: '/about-us',
});

export default function AboutUsPage() {
  return (
    <MaxWidthWrapper>
      <AboutUsSection />
    </MaxWidthWrapper>
  );
}