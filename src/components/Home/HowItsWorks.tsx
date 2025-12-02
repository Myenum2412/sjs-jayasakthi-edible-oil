import React from "react";
import { FeatureCarousel } from "../animated-feature-carousel";
import { ShuffleHero } from "../shuffle-grid";
import { VideoPlayer } from "../video-thumbnail-player";

export default function HowItsWorks() {
  return (
    <section className="my-5 lg:my-10 px-3">
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        How It Works
      </h2>
      <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left mt-2">
        We understand the challenges of managing a small business today.
      </p>
      <FeatureCarousel image={images} />
      <div className="flex w-full h-screen justify-center items-center">
        <ShuffleHero />
      </div>
      <div className="w-full max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl text-center mb-4">
          Know More About Our Products
        </h2>
        <VideoPlayer
          thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Example: YouTube embed URL with autoplay
          title="Building the Future"
          description="A look into modern architecture and design."
          className="rounded-xl"
        />
      </div>
      <div className="border-t border-gray-200 my-5 max-w-md mx-auto border-2" />
    </section>
  );
}

const images = {
  alt: "Feature screenshot",
  step1img1:
    "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop",
  step1img2:
    "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop",
  step2img1:
    "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop",
  step2img2:
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop",
  step3img:
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
  step4img:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop",
};
