"use client";

import Script from "next/script";

export function WebVitalsScript() {
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }

    return (
        <Script
            strategy="afterInteractive"
            src="https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js"
            onLoad={() => {
                if (typeof window !== 'undefined' && (window as any).webVitals) {
                    (window as any).webVitals.onCLS(console.log);
                    (window as any).webVitals.onFID(console.log);
                    (window as any).webVitals.onFCP(console.log);
                    (window as any).webVitals.onLCP(console.log);
                    (window as any).webVitals.onTTFB(console.log);
                    (window as any).webVitals.onINP(console.log);
                }
            }}
        />
    );
}
