import { lazy, Suspense } from 'react';
import HeroSection from '@/components/Home/hero-section'
import ProductsSection from '@/components/Home/Products-section'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import FloatingContactButton from '@/components/FloatingContactButton'
import { Skeleton } from '@/components/skeleton'
import FeaturesSection from '@/components/Home/features-section'
import LogoCloud from '@/components/logo-cloud';
import StatsSection from '@/components/stats';

// Lazy load heavy components
const CTA2 = lazy(() => import('@/components/mvpblocks/cta-2'));
const Faq2 = lazy(() => import('@/components/mvpblocks/faq-2'));

function page() {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSection />
        <LogoCloud />
        <ProductsSection />
        <FeaturesSection />
        <StatsSection />
        <Suspense fallback={<Skeleton className="h-64 w-full" />}>
          <CTA2 />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-64 w-full" />}>
          <Faq2 showViewMore={true} initialItemsCount={2} />
        </Suspense>
      </MaxWidthWrapper>
      <FloatingContactButton />
    </>
  )
}

export default page