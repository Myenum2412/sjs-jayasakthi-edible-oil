import React from "react";
import { FramerCarousel } from "../framer-carousel";
import ProductsList from "./ProductsList";
import { productsData } from "@/data/products";
import PageBreadcrumb from "../ui/PageBreadcrumb";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products" }
        ]}
      />
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Premium Edible Oils
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5">
        Discover our range of pure, quality cooking oils for your kitchen.
      </p>

      {/* Local SEO Quick Links */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          href="/salem"
          className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
        >
          Best Oils in Salem
        </Link>
      </div>

      <FramerCarousel/>
      <div className="my-5 border-t border-neutral-600/50 max-w-xl mx-auto" />
      <ProductsList products={productsData}/>

    </section>
  );
};

export default ProductsSection;
