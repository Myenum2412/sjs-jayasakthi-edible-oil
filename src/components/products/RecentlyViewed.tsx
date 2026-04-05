"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import { Skeleton } from "../skeleton";

const MAX_RECENTLY_VIEWED = 8;

interface RecentlyViewedProps {
  currentProductId?: string | number;
}

export function RecentlyViewed({ currentProductId }: RecentlyViewedProps) {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Filter out current product if provided
        const filtered = currentProductId
          ? parsed.filter((p: Product) => String(p.id) !== String(currentProductId))
          : parsed;
        setRecentlyViewed(filtered.slice(0, MAX_RECENTLY_VIEWED));
      } catch (e) {
        console.error("Failed to parse recently viewed:", e);
      }
    }
  }, [currentProductId]);

  if (!isMounted || recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Recently Viewed
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentlyViewed.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group block"
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square bg-muted">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  {product.price && (
                    <p className="text-primary font-semibold mt-1">
                      ₹{product.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hook to track recently viewed products
export function useTrackRecentlyViewed(product: Product) {
  useEffect(() => {
    if (!product || !product.id) return;

    const stored = localStorage.getItem("recentlyViewed");
    let recentlyViewed: Product[] = [];

    try {
      recentlyViewed = stored ? JSON.parse(stored) : [];
    } catch (e) {
      recentlyViewed = [];
    }

    // Remove current product if already in list
    recentlyViewed = recentlyViewed.filter((p) => p.id !== product.id);

    // Add current product to the beginning
    recentlyViewed.unshift(product);

    // Keep only the most recent items
    recentlyViewed = recentlyViewed.slice(0, MAX_RECENTLY_VIEWED);

    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [product]);
}

// Skeleton component for loading state
export function RecentlyViewedSkeleton() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="aspect-square" />
              <div className="p-3 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentlyViewed;
