import { MetadataRoute } from "next";
import { productsData } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sri-jayasakthi-oils.com";
  const baseUrl = siteUrl;
  const now = new Date();

  // Static pages with optimized priorities and frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bulk-order`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Product pages - get unique products by name to avoid duplicates
  // Using Map for better performance than array filtering
  const uniqueProducts = new Map<string, typeof productsData[0]>();
  productsData.forEach((product) => {
    const key = product.name.toLowerCase().trim();
    if (!uniqueProducts.has(key)) {
      uniqueProducts.set(key, product);
    }
  });

  const productPages: MetadataRoute.Sitemap = Array.from(uniqueProducts.values()).map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Combine and return - limit to prevent sitemap bloat
  const allPages = [...staticPages, ...productPages].slice(0, 50000); // Google limit is 50k
  return allPages;
}

