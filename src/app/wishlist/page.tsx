"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { Product, productsData } from "@/data/products";
import { Button } from "@/components/ui/button";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import { Skeleton } from "@/components/skeleton";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    // Get full product details for wishlist items
    const items = productsData.filter((product) =>
      wishlist.includes(String(product.id))
    );
    setWishlistItems(items);

    // Listen for wishlist updates
    const handleUpdate = () => {
      const updatedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const updatedItems = productsData.filter((product) =>
        updatedWishlist.includes(String(product.id))
      );
      setWishlistItems(updatedItems);
    };

    window.addEventListener("wishlist-updated", handleUpdate);
    return () => window.removeEventListener("wishlist-updated", handleUpdate);
  }, []);

  const removeFromWishlist = (productId: string) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const newWishlist = wishlist.filter((id: string) => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    setWishlistItems(wishlistItems.filter((item) => String(item.id) !== productId));
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  const addToCart = (product: Product) => {
    // Implement cart functionality
    console.log("Adding to cart:", product);
  };

  if (!isMounted) {
    return <WishlistSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wishlist" }
        ]}
      />

      <h1 className="text-3xl font-bold mt-6 mb-8">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Save your favorite products to view them later
          </p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground mb-6">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
          </p>

          <div className="grid gap-4">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-card hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <Link href={`/products/${product.slug}`} className="flex-shrink-0">
                  <div className="relative w-full md:w-40 aspect-square bg-muted rounded-lg overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        No Image
                      </div>
                    )}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-semibold text-lg hover:text-primary transition-colors truncate">
                      {product.name}
                    </h3>
                  </Link>

                  {product.size && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Size: {product.size}
                    </p>
                  )}

                  {product.rating && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.round(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xl font-bold text-primary">
                      {typeof product.price === 'string' ? product.price : `₹${product.price}`}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through">
                        {typeof product.originalPrice === 'string' ? product.originalPrice : `₹${product.originalPrice}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col gap-2 justify-end">
                  <Button
                    onClick={() => addToCart(product)}
                    className="flex-1 md:flex-none"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(String(product.id))}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function WishlistSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-6 w-48 mb-8" />

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-4 p-4 border rounded-lg">
            <Skeleton className="w-40 aspect-square" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
