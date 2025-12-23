import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  ProductDetailPage,
  ProductDetailPageProps,
} from "@/components/product-detail-page";
import React from "react";
import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDropCard } from "@/components/product-card-3";
import {
  generateProductMetadata,
  generateAllProductStructuredData,
} from "@/lib/meta";

// Generate metadata for each product using advanced SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const productData = productsData.find(
    (product) => product.id.toString() === resolvedParams.id
  );

  if (!productData) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return generateProductMetadata(productData);
}

// Generate static params for all products (for better SEO)
export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Handle both sync and async params (Next.js 13-14 vs 15+)
  const resolvedParams = params instanceof Promise ? await params : params;
  const productData = productsData.find(
    (product) => product.id.toString() === resolvedParams.id
  );

  if (!productData) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sri-jayasakthi-oils.com";
  const productUrl = `${siteUrl}/products/${productData.id}`;

  // Extract currency symbol from price string
  const currency = productData.price.replace(/[0-9.,]/g, "").trim() || "₹";

  // Extract numeric price value
  const priceValue = parseFloat(productData.price.replace(/[^0-9.]/g, "")) || 0;

  // Calculate shipping cost (5% of price, minimum ₹2.00)
  const shippingCost = Math.max(priceValue * 0.05, 2.0);

  // Create images array (using primary, secondary, and gallery images)
  const images = productData.imageGallery && productData.imageGallery.length > 0
    ? productData.imageGallery
    : [
        productData.image,
        ...(productData.imageSecondary ? [productData.imageSecondary] : []),
        // Fallback to primary image if no secondary image
        ...(productData.imageSecondary ? [] : [productData.image]),
      ];

  // Create tags from product data (using icon names as strings for serialization)
  const tags = [
    { label: productData.size, iconName: "Ruler" },
    ...(productData.category ? [{ label: productData.category, iconName: "Tag" as const }] : []),
    { label: "Premium", iconName: "Tag" },
    { label: "Best Seller", iconName: "Info" },
  ];

  // Transform product data to match ProductDetailPageProps interface
  const product: ProductDetailPageProps["product"] = {
    id: productData.id,
    name: productData.name,
    price: priceValue,
    currency: currency,
    images: images,
    description: productData.description,
    tags: tags,
    benefits: productData.benefits as string[] | [],
  };

  // Create breadcrumbs
  const breadcrumbs: ProductDetailPageProps["breadcrumbs"] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    {
      label: productData.size,
      href: `/products?size=${encodeURIComponent(productData.size)}`,
    },
    { label: productData.name, href: `#` },
  ];

  // Default seller information (can be replaced with actual seller data if available)
  const seller: ProductDetailPageProps["seller"] = {
    name: "Sri Jayasakthi Edible Oils Pvt. Ltd",
    avatarUrl: "/logo.png",
  };

  // Generate all structured data using advanced SEO
  const structuredData = generateAllProductStructuredData(productData);

  return (
    <>
      {/* Advanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.product),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.breadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.faq),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.howTo),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.website),
        }}
      />

      <MaxWidthWrapper>
        <section className="py-28 md:pb-32 lg:mx-6 mx-2">
          <div className="border rounded-4xl shadow-primary/20 mx-auto p-4 sm:p-6 md:p-8">
            <div>
              <ProductDetailPage
                product={product}
                seller={seller}
                breadcrumbs={breadcrumbs}
              />
            </div>
          </div>
          <div className="border max-w-xl mx-auto my-10 " />
          <ProductDropCard
            items={productsData}
            title="Related Products"
            subtitle="Related Products"
          />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
