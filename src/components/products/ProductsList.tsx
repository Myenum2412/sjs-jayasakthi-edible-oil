"use client";
import type { ReactNode } from "react";
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProductRevealCard } from "../product-reveal-card";
import { Skeleton } from "../skeleton";
import { Product } from "@/data/products";
import { useRouter, useSearchParams } from "next/navigation";

// Helper function to convert price to number
function getPriceAsNumber(price: string | number | undefined): number {
  if (price === undefined || price === null) return 0;
  if (typeof price === 'number') return price;
  // Remove currency symbols and parse
  const parsed = parseFloat(String(price).replace(/[^0-9.]/g, ''));
  return isNaN(parsed) ? 0 : parsed;
}

// Debounce hook for search
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface ProductsListProps {
  products: Product[];
}

const ProductsList = memo(function ProductsList({ products }: ProductsListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State from URL params
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Debounce search
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Update URL when filters change
  const updateURL = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === "" || value === "default") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  // Handle filter changes
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    updateURL({ category: newCategory });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateURL({ search: query || null });
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateURL({ sort: sort });
  };

  // Get unique sizes from products
  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach((product) => {
      if (product.size) {
        sizes.add(product.size);
      }
    });
    return Array.from(sizes).sort();
  }, [products]);

  // Filter and sort products
  const filteredAndSortedData = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (category === "All") {
      result = products;
    } else if (category === "Oils") {
      result = products.filter(
        (product) => product.type === "Refined Oil" || product.type === "Non-Refined Oil"
      );
    } else if (category === "Pouches") {
      result = products.filter((product) => product.type === "Pouches");
    } else {
      result = result.filter((product) => product.type === category);
    }

    // Filter by search query
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower) ||
          product.type?.toLowerCase().includes(searchLower)
      );
    }

    // Filter by price range
    result = result.filter((product) => {
      const price = getPriceAsNumber(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Filter by size
    if (sizeFilter.length > 0) {
      result = result.filter((product) => {
        if (!product.size) return false;
        return sizeFilter.includes(product.size);
      });
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => getPriceAsNumber(a.price) - getPriceAsNumber(b.price));
        break;
      case "price-desc":
        result.sort((a, b) => getPriceAsNumber(b.price) - getPriceAsNumber(a.price));
        break;
      case "newest":
        result.sort((a, b) => (b.id || 0) - (a.id || 0));
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Default order
        break;
    }

    return result;
  }, [products, category, debouncedSearch, priceRange, sizeFilter, sortBy]);

  // Get min/max price for range filter
  const priceBounds = useMemo(() => {
    const prices = products.map((p) => getPriceAsNumber(p.price));
    const validPrices = prices.filter(p => p > 0);
    if (validPrices.length === 0) return { min: 0, max: 5000 };
    return {
      min: Math.min(...validPrices),
      max: Math.max(...validPrices),
    };
  }, [products]);

  return (
    <div className="relative mx-auto max-w-6xl">
      <p className="md:text-3xl text-2xl mx-auto tracking-tighter max-w-xl font-regular text-center my-5">
        Our Best Sellers
      </p>

      {/* Product Grid */}

      <div className="flex items-center justify-between">
        <SlideTabs category={category} setCategory={handleCategoryChange} />
      </div>
      <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-center my-5">
        {category === "All" ? "All Products" : `${category} Products`}
      </h2>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing {filteredAndSortedData.length} of {products.length} products
      </p>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-auto ">
          {filteredAndSortedData?.length > 0 ? (
            filteredAndSortedData.map((product, index) => (
              <ProductRevealCard
                key={product.id}
                {...product}
                priority={index < 4}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([priceBounds.min, priceBounds.max]);
                  setSizeFilter([]);
                  setCategory("All");
                }}
                className="mt-2 text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProductsList.displayName = "ProductsList";

export default ProductsList;

interface SlideTabsProps {
  category: string;
  setCategory: (category: string) => void;
}

export const SlideTabs = ({ category, setCategory }: SlideTabsProps) => {
  const [activeTab, setActiveTab] = useState(category);
  const [position, setPosition] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // This effect runs when the component mounts or when the selected tab changes.
  // It calculates the position of the selected tab and sets the cursor.
  useEffect(() => {
    setActiveTab(category);
    const tabIndex = [
      "All",
      "Oils",
      "Baker's Choice",
      "Baker's Day",
      "Oil Bottles",
      "Pouches",
    ].indexOf(category);
    const selectedTab = tabsRef.current[tabIndex];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [category]);

  return (
    <ul
      onMouseLeave={() => {
        // When the mouse leaves the container, reset the cursor
        // to the position of the currently selected tab.
        setActiveTab(category);
        const tabIndex = [
          "All",
          "Oils",
          "Baker's Choice",
          "Baker's Day",
          "Oil Bottles",
          "Pouches",
        ].indexOf(category);
        const selectedTab = tabsRef.current[tabIndex];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-primary bg-background p-1 flex-wrap justify-center overflow-x-auto"
    >
      {[
        "All",
        "Oils",
        "Baker's Choice",
        "Baker's Day",
        "Oil Bottles",
        "Pouches",
      ].map((tab, i) => (
        <Tab
          key={tab}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => setCategory(tab)}
          isActive={activeTab === tab}
          onMouseEnter={() => setActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

// The Tab component is wrapped in forwardRef to accept a ref from its parent.
interface TabProps {
  children: ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  onClick: () => void;
  isActive: boolean;
  onMouseEnter: () => void;
}

const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, isActive, onMouseEnter }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          onMouseEnter();
          if (!ref || typeof ref === "function" || !ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base transition-colors duration-200 ${
          isActive ? "text-white" : "text-primary"
        }`}
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

// Product Card Skeleton Component
const ProductCardSkeleton = () => {
  return (
    <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-lg shadow-black/5 w-full">
      {/* Image Skeleton */}
      <Skeleton className="h-56 w-full rounded-t-2xl" />

      {/* Content Skeleton */}
      <div className="p-6 space-y-3">
        {/* Rating Skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24 rounded" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-6 w-full rounded" />
        <Skeleton className="h-6 w-3/4 rounded" />

        {/* Price Skeleton */}
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-8 w-24 rounded" />
        </div>
      </div>
    </div>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-primary md:h-12"
    />
  );
};
