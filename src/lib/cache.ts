/**
 * Client-side caching utilities for performance optimization
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

/**
 * Simple in-memory cache for client-side data
 */
class MemoryCache {
  private cache = new Map<string, CacheEntry<any>>();

  /**
   * Get item from cache if not expired
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Set item in cache with TTL
   */
  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  /**
   * Remove item from cache
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Clear expired entries
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Global cache instance
const memoryCache = new MemoryCache();

// Cleanup expired entries every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    memoryCache.cleanup();
  }, 5 * 60 * 1000);
}

/**
 * Cache wrapper for async functions
 */
export function withCache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  getKey: (...args: Parameters<T>) => string,
  ttl: number = 5 * 60 * 1000
): T {
  return (async (...args: Parameters<T>) => {
    const key = getKey(...args);
    const cached = memoryCache.get<Awaited<ReturnType<T>>>(key);
    
    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    memoryCache.set(key, result, ttl);
    
    return result;
  }) as T;
}

/**
 * Cache utility exports
 */
export const cache = {
  get: <T>(key: string) => memoryCache.get<T>(key),
  set: <T>(key: string, data: T, ttl?: number) => memoryCache.set(key, data, ttl),
  delete: (key: string) => memoryCache.delete(key),
  clear: () => memoryCache.clear(),
};

/**
 * Generate cache key from parameters
 */
export function generateCacheKey(prefix: string, ...params: any[]): string {
  return `${prefix}:${params.map(p => 
    typeof p === 'object' ? JSON.stringify(p) : String(p)
  ).join(':')}`;
}
