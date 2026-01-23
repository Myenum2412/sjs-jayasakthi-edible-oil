"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";

export const items = [
  {
    id: 0,
    src: "/intro.mp4",
    title: "Winter Wonderland",
    type: "video",
  },
  {
    id: 1,
    src: "https://z1mha2833x.ufs.sh/f/79Y9MKyI6eTfpZYax7X1kTo3QO5EziHcPl9uaSrUmIh0qDdf",
    title: "Misty Mountain Majesty",
    type: "image",
  },
  {
    id: 2,
    src: "/banner/bakes.mp4",
    title: "Winter Wonderland",
    type: "video",
  },
  {
    id: 3,
    src: "/banner/cakes.mp4",
    title: "Autumn Mountain Retreat",
    type: "video",
  },
  {
    id: 4,
    src: "/banner/oilss.mp4",
    title: "Tranquil Lake Reflection",
    type: "video",
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }} className="lg:p-10 sm:p-4 p-2  mx-auto">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-lg" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-full md:h-[500px] h-[300px]"
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover rounded-lg pointer-events-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform z-10
              ${index === 0
                ? "opacity-40 cursor-not-allowed"
                : "bg-primary hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform z-10
              ${index === items.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "bg-primary hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                title={`Go to slide ${i + 1}`}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
