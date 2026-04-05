"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";

interface WishlistButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export function WishlistButton({ productId, productName, className = "" }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsInWishlist(wishlist.includes(productId));
  }, [productId]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (wishlist.includes(productId)) {
      const newWishlist = wishlist.filter((id: string) => id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      setIsInWishlist(false);
      toast.success("Removed from wishlist");
    } else {
      const newWishlist = [...wishlist, productId];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      setIsInWishlist(true);
      toast.success(`Added "${productName}" to wishlist`);
    }

    // Dispatch custom event for wishlist updates
    window.dispatchEvent(new Event("wishlist-updated"));
  };

  if (!isMounted) {
    return (
      <button
        className={`p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${className}`}
        aria-label="Add to wishlist"
      >
        <Heart className="h-5 w-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors ${className}`}
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          isInWishlist ? "fill-red-500 text-red-500" : "text-muted-foreground"
        }`}
      />
    </button>
  );
}

export default WishlistButton;
