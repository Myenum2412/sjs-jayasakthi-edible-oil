import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { HeroSkeleton, FeaturesSkeleton, ProductsGridSkeleton } from '@/components/LoadingSkeleton';
import { Skeleton } from '@/components/skeleton';
import { generateMetadata as generateBaseMetadata } from '@/lib/meta';
import Features from '@/components/features-1';import CTA2 from '@/components/mvpblocks/cta-2';
 ""

// Lazy load all heavy components with code splitting
const HeroSection = dynamic(() => import('@/components/Home/hero-section'), {
  loading: () => <HeroSkeleton />,
  ssr: true, // Keep SSR for SEO
});

const ProductsSection = dynamic(() => import('@/components/Home/Products-section'), {
  loading: () => (
    <div className="space-y-8 py-16">
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-6 w-96" />
      </div>
      <ProductsGridSkeleton count={4} />
    </div>
  ),
  ssr: true,
});

const FeaturesSection = dynamic(() => import('@/components/Home/features-section'), {
  loading: () => <FeaturesSkeleton />,
  ssr: true,
});

const StatsSection = dynamic(() => import('@/components/stats'), {
  loading: () => (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 py-16">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-12 w-12 rounded-full mx-auto" />
          <Skeleton className="h-6 w-24 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

// Heavy components that don't need SSR can be lazy loaded
// CTA2 removed due to missing component
// const CTA2 = lazy(() => import('@/components/mvpblocks/cta-2'));
const Faq2 = lazy(() => import('@/components/mvpblocks/faq-2'));

// Generate metadata for SEO
export const metadata = generateBaseMetadata({
  title: "Best Edible Oils in Salem | Sri Jayasakthi Edible Oils",
  description: "Sri Jayasakthi Edible Oils is Salem's leading manufacturer of premium coconut, sunflower, and groundnut oils. Quality cooking oils delivered near Salem, Tamil Nadu.",
  keywords: "edible oils in Salem, cooking oils Salem Tamil Nadu, coconut oil near Salem, Sri Jayasakthi oils Salem",
});

export default function HomePage() {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <CTA2 />
        <br />
      </MaxWidthWrapper>
    </>
  );
}