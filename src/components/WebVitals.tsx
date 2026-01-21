'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/lib/performance';

/**
 * Web Vitals monitoring component
 * Reports Core Web Vitals metrics for performance monitoring
 */
export function WebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    // Report Web Vitals if available
    if ('web-vitals' in window || typeof (window as any).webVitals !== 'undefined') {
      // Metrics will be reported via the script in layout.tsx
      return;
    }

    // Fallback: manually measure if library is not available
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                reportWebVitals({
                  id: entry.name,
                  name: 'CLS',
                  label: 'layout-shift',
                  value: (entry as any).value,
                });
              }
            }
          });
          observer.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          // Performance Observer not supported
        }
      }
    };

    measureCLS();
  }, []);

  return null;
}
