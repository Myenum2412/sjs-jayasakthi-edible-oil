"use client";

import * as React from "react";
import {
  ChevronRight,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Spotlight } from "@/components/ui/spotlight";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductActions } from "@/components/products/product-actions";

// Define TypeScript interfaces for component props for type safety and reusability
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductTag {
  label: string;
  iconName?: string; // Changed from React.ElementType to string for serialization
}

interface Seller {
  name: string;
  avatarUrl: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  benefits?: string[];
  tags?: ProductTag[];
  originalPrice?: number;
  reviewCount?: number;
  rating?: number;
  size?: string;
}

export interface ProductDetailPageProps {
  product: Product;
  seller: Seller;
  breadcrumbs: BreadcrumbItem[];
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  seller,
  breadcrumbs,
}) => {
  const handleShare = async () => {
    try {
      const shareData = {
        title: product.name,
        text: `Check out ${product.name} - ${product.description}`,
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="w-full relative mx-auto p-4 md:p-8 bg-background text-foreground overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className={cn(
          "opacity-30 -top-40 -left-40"
        )}
        fill="white"
      />

      {/* Breadcrumbs Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center text-sm text-muted-foreground mb-4"
      >
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            {item.href === "#" ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-1" />
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="flex justify-between items-center -mt-5">
        <div /> {/* Spacer */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleShare}>
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>

      {/* Main content grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Image Gallery Section */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Details Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {product.name}
          </h1>

          <ProductActions productName={product.name} />

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Seller Information */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={seller.avatarUrl} alt={seller.name} />
                  <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{seller.name}</p>
                </div>
              </div>
              <Link href="/products" className="text-primary">
                <Button variant="link" className="text-primary">
                  All Products &rarr;
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div className="flex flex-col  gap-4">
                <h2 className="text-2xl font-bold">Benefits of {product.name}</h2>
                <ul className="list-disc list-inside">
                  {product.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
