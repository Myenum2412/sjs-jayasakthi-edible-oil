/**
 * Performance monitoring and optimization utilities
 */

/**
 * Measures Core Web Vitals and sends to analytics
 */
export function reportWebVitals(metric: {
  id: string;
  name: string;
  label: string;
  value: number;
}) {
  // Send to analytics service (Google Analytics, Vercel Analytics, etc.)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
  }
}

/**
 * Debounce function to limit function execution frequency
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit function execution frequency
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Lazy loads images when they enter viewport
 */
export function lazyLoadImages() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  const images = document.querySelectorAll('img[data-src]');
  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Preloads critical resources
 */
export function preloadResource(href: string, as: string, crossOrigin?: string) {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }
  document.head.appendChild(link);
}

/**
 * Prefetches a route for faster navigation
 */
export function prefetchRoute(url: string) {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Measures time taken for a function to execute
 */
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  if (typeof performance === 'undefined') {
    return fn();
  }
  
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  }
  
  return result;
}

/**
 * Creates a performance mark for measuring
 */
export function markPerformance(name: string) {
  if (typeof performance !== 'undefined' && 'mark' in performance) {
    performance.mark(name);
  }
}

/**
 * Measures between two performance marks
 */
export function measureBetween(mark1: string, mark2: string, name: string) {
  if (typeof performance !== 'undefined' && 'measure' in performance) {
    try {
      performance.measure(name, mark1, mark2);
      const measure = performance.getEntriesByName(name)[0];
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${measure.duration.toFixed(2)}ms`);
      }
      
      return measure.duration;
    } catch (error) {
      console.warn('Performance measure failed:', error);
    }
  }
  return 0;
}
