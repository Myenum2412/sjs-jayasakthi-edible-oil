import React from "react";
import { ProductsCarousel } from "../gallery4";
import { Feature } from "../ui/feature-section-with-bento-grid";
import { productsData, Product } from "@/data/products";

export default function ProductsSection() {

  return (
    <section className="my-5 lg:my-10 px-3">
      <ProductsCarousel products={productsData} />
      <Feature />
    </section>
  );
}

