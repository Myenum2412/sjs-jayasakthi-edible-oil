"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Ensure video plays on mobile devices
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again on user interaction
          const handleInteraction = () => {
            video.play().catch(() => { });
            document.removeEventListener("touchstart", handleInteraction);
            document.removeEventListener("click", handleInteraction);
          };
          document.addEventListener("touchstart", handleInteraction, { once: true });
          document.addEventListener("click", handleInteraction, { once: true });
        });
      }
    }
  }, []);

  return (
    <>
      <main className="overflow-hidden relative h-[90vh] max-md:h-[80vh]">
        <section>
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72 h-full">
            <div className="aspect-2/3 absolute inset-y-1 left-0 right-0 mx-auto -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] max-w-7xl h-full w-full">
              <Image
                src="/images/aboutus.png"
                alt="Premium Edible Oils - Sri Jayasakthi"
                fill
                priority
                sizes="100vw"
                className="object-cover -z-10"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ/wCHaOQAAAABJRU5ErkJggg=="
              />
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 size-full object-cover opacity-100"
                src="/intro.mp4"
                poster="/images/aboutus.png"
                aria-hidden="true"
              ></video>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
