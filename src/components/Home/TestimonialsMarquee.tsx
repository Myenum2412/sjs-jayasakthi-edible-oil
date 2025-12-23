'use client';

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rajesh Kumar",
    username: "Wholesale Distributor",
    body: "Excellent quality oils and reliable delivery. Sri Jayasakthi has been our trusted partner for over 5 years. The purity and consistency of their products is unmatched.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Priya Sharma",
    username: "Restaurant Owner",
    body: "We use their coconut oil exclusively in our restaurant. The quality is exceptional and our customers love the authentic taste. Highly recommended!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Amit Patel",
    username: "Retail Store Manager",
    body: "Best edible oils in the market! Our customers always come back for more. The packaging is great and the products stay fresh longer.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Lakshmi Nair",
    username: "Home Chef",
    body: "I've been using Sri Jayasakthi oils for my family for years. The pure coconut oil is my favorite - it gives authentic South Indian flavor to all my dishes.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Suresh Reddy",
    username: "Bulk Buyer",
    body: "Outstanding service and premium quality. Their bulk order process is smooth and they always deliver on time. Great value for money!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
  {
    name: "Meera Iyer",
    username: "Health Conscious Consumer",
    body: "Love the purity and quality of their oils. As someone who cares about health, I trust Sri Jayasakthi for all my cooking needs. Natural and authentic!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-border bg-card hover:bg-accent",
        // dark styles
        "dark:border-border dark:bg-card dark:hover:bg-accent"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-foreground">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Customers Say</h2>
        <p className="text-muted-foreground">Trusted by thousands of satisfied customers</p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}

