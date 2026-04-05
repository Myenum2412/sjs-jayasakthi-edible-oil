"use client";

import { useState } from "react";
import { Star, User, ThumbsUp, ThumbsDown } from "lucide-react";
import { Skeleton } from "../skeleton";

// Sample reviews data - in production this would come from an API
interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
  size?: string;
}

interface ProductReviewsProps {
  productId?: string;
  productName?: string;
  averageRating?: number;
  totalReviews?: number;
}

// Sample reviews
const sampleReviews: Review[] = [
  {
    id: "1",
    author: "Rajesh Kumar",
    rating: 5,
    date: "2024-01-15",
    title: "Excellent quality oil!",
    comment: "I've been using Sri Jayasakthi coconut oil for my cooking for the past 6 months. The quality is outstanding and the taste is authentic. Highly recommended!",
    verified: true,
    helpful: 24,
    size: "1L"
  },
  {
    id: "2",
    author: "Priya Venkatesh",
    rating: 4,
    date: "2024-01-10",
    title: "Good product, timely delivery",
    comment: "Ordered groundnut oil for baking. The oil is pure and fresh. Delivery was on time. Will order again.",
    verified: true,
    helpful: 18,
    size: "500ml"
  },
  {
    id: "3",
    author: "Suresh Babu",
    rating: 5,
    date: "2024-01-05",
    title: "Best edible oil in Salem",
    comment: "As a restaurant owner, I need consistent quality oils. Sri Jayasakthi has been our trusted supplier for years. Excellent products.",
    verified: true,
    helpful: 32,
    size: "5L"
  },
  {
    id: "4",
    author: "Anitha Mahesh",
    rating: 4,
    date: "2023-12-28",
    title: "Great for deep frying",
    comment: "Used the sunflower oil for deep frying. Smoke point is good and doesn't leave aftertaste. Good value for money.",
    verified: true,
    helpful: 15,
    size: "1L"
  },
  {
    id: "5",
    author: "Vijay Raghavan",
    rating: 5,
    date: "2023-12-20",
    title: "Pure and natural",
    comment: "I appreciate that they don't add any preservatives. Pure cold-pressed oil as promised. My family loves it.",
    verified: true,
    helpful: 21,
    size: "1L"
  }
];

export function ProductReviews({
  productId,
  productName,
  averageRating = 4.5,
  totalReviews = 125
}: ProductReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest" | "helpful">("helpful");

  // Sort reviews
  const sortedReviews = [...sampleReviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      case "helpful":
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const displayedReviews = showAllReviews ? sortedReviews : sortedReviews.slice(0, 3);

  // Rating distribution
  const ratingDistribution = [
    { rating: 5, count: 78, percentage: 62 },
    { rating: 4, count: 32, percentage: 26 },
    { rating: 3, count: 10, percentage: 8 },
    { rating: 2, count: 3, percentage: 2 },
    { rating: 1, count: 2, percentage: 2 }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        {/* Rating Summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Overall Rating */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-5xl font-bold">{averageRating}</span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(averageRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm w-3">{rating}</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sort and Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-muted-foreground">
            Showing {displayedReviews.length} of {sampleReviews.length} reviews
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-2 rounded-lg border bg-background text-sm"
          >
            <option value="helpful">Most Helpful</option>
            <option value="newest">Newest First</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Load More */}
        {sampleReviews.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="px-6 py-2 rounded-lg border bg-background hover:bg-accent transition-colors"
            >
              {showAllReviews ? "Show Less" : `Show All ${sampleReviews.length} Reviews`}
            </button>
          </div>
        )}

        {/* Write Review CTA */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Have you tried this product?</h3>
          <p className="text-muted-foreground mb-4">
            Share your experience with other customers
          </p>
          <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}

// Individual Review Card
function ReviewCard({ review }: { review: Review }) {
  const [helpful, setHelpful] = useState(review.helpful);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    if (voted === type) {
      setHelpful(helpful - 1);
      setVoted(null);
    } else if (voted === null) {
      setHelpful(helpful + (type === "up" ? 1 : -1));
      setVoted(type);
    } else {
      setHelpful(helpful + (type === "up" ? 2 : -2));
      setVoted(type);
    }
  };

  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{review.author}</span>
              {review.verified && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Verified Purchase
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{new Date(review.date).toLocaleDateString()}</span>
              {review.size && (
                <>
                  <span>•</span>
                  <span>Size: {review.size}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <h4 className="font-semibold mb-2">{review.title}</h4>
      <p className="text-muted-foreground mb-4">{review.comment}</p>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Was this helpful?</span>
        <button
          onClick={() => handleVote("up")}
          className={`flex items-center gap-1 px-2 py-1 rounded ${
            voted === "up" ? "bg-primary/10 text-primary" : "hover:bg-muted"
          }`}
        >
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm">{helpful}</span>
        </button>
        <button
          onClick={() => handleVote("down")}
          className={`flex items-center gap-1 px-2 py-1 rounded ${
            voted === "down" ? "bg-primary/10 text-primary" : "hover:bg-muted"
          }`}
        >
          <ThumbsDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// Skeleton for loading state
export function ProductReviewsSkeleton() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12" />
            <div>
              <Skeleton className="h-6 w-20 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-2 flex-1" />
                <Skeleton className="h-4 w-8" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductReviews;
