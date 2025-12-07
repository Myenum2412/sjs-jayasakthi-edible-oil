"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductRevealCard } from "../product-reveal-card";
import { productsData } from "../../../public/asset";

// Sample product data with category/size information


const ProductsList = () => {
  const [category, setCategory] = useState("All");

  // Filter products based on selected category
  const filteredData =
    category === "All"
      ? productsData
      : productsData.filter((product) => product.size === category);

  return (
    <div className="relative mx-auto max-w-6xl">
      <p className="md:text-3xl text-2xl mx-auto tracking-tighter max-w-xl font-regular text-center my-5">
        Our Best Sellers
      </p>
      <div className="flex items-center justify-between">
        <SlideTabs category={category} setCategory={setCategory} />
      </div>
      <h2 className="text-3xl md:text-5xl tracking-tighter font-regular text-center my-5">
        {category === "All" ? "All Products" : `${category} Products`}
      </h2>
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-auto ">
          {filteredData.map((product) => (
            <ProductRevealCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              description={product.description}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

interface SlideTabsProps {
  category: string;
  setCategory: (category: string) => void;
}

export const SlideTabs = ({ category, setCategory }: SlideTabsProps) => {
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
    const tabIndex = [
      "All",
      "1 Litre",
      "2 Litre",
      "5 Litre",
      "10 Litre",
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
        const tabIndex = [
          "All",
          "1 Litre",
          "2 Litre",
          "5 Litre",
          "10 Litre",
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-primary bg-background p-1"
    >
      {["All", "1 Litre", "2 Litre", "5 Litre", "10 Litre"].map((tab, i) => (
        <Tab
          key={tab}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => setCategory(tab)}
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
  children: React.ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === "function" || !ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-foreground  md:px-5 md:py-3 md:text-base hover:text-primary/80"
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

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
