"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    return (
        <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-4/5 w-full overflow-hidden rounded-xl border"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${productName} image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true}
                        className="object-contain w-full h-full p-4"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center w-full">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={cn(
                                "h-2 w-2 rounded-full transition-colors",
                                currentImageIndex === index
                                    ? "bg-primary"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            )}
                            aria-label={`View image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
