import { Skeleton } from '@/components/skeleton';
import { cn } from '@/lib/utils';

/**
 * Product card skeleton for loading states
 */
export function ProductCardSkeleton() {
  return (
    <div className="group rounded-xl border border-border">
      <Skeleton className="aspect-[4/5] w-full rounded-t-xl" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}

/**
 * Products grid skeleton
 */
export function ProductsGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Hero section skeleton
 */
export function HeroSkeleton() {
  return (
    <div className="relative h-[90vh] max-md:h-[80vh] w-full">
      <Skeleton className="h-full w-full rounded-3xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        <Skeleton className="h-16 w-3/4 max-w-2xl" />
        <Skeleton className="h-6 w-2/3 max-w-xl" />
        <Skeleton className="h-12 w-48 rounded-full" />
      </div>
    </div>
  );
}

/**
 * Feature section skeleton
 */
export function FeaturesSkeleton() {
  return (
    <div className="space-y-12 py-16 md:py-32">
      <div className="grid items-center gap-4 md:grid-cols-2 md:gap-12">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="aspect-[88/36] w-full rounded-lg" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-16 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Text skeleton for paragraphs
 */
export function TextSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4 w-full", i === lines - 1 && "w-3/4")}
        />
      ))}
    </div>
  );
}

/**
 * Page skeleton wrapper
 */
export function PageSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}
