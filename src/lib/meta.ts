import type { Metadata } from "next";
import { productsData, Product } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sri-jayasakthi-oils.com";
const siteName = "Sri Jayasakthi Edible Oils - Salem's Trusted Brand";
const defaultDescription = "Sri Jayasakthi Edible Oils Pvt. Ltd is Salem's leading manufacturer of premium edible oils. Purity and quality since 1985 for homes and businesses in Salem, Tamil Nadu.";
const defaultKeywords = "edible oils Salem, cooking oils Salem Tamil Nadu, coconut oil near Salem, groundnut oil Salem, sunflower oil Salem, bulk oil suppliers Salem";
const twitterHandle = "@jayasakthioils"; // Update with actual handle
const locale = "en_IN";

/**
 * Generates comprehensive SEO metadata with Open Graph and Twitter Cards
 */
export function generateMetadata(options: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const {
    title = siteName,
    description = defaultDescription,
    keywords = defaultKeywords,
    image,
    url = siteUrl,
    type = "website",
    noindex = false,
  } = options;

  const ogImage = image || `${siteUrl}/logo.png`;
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: description.substring(0, 160),
    keywords: keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    manifest: "/manifest.json",
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      locale,
      url: url.startsWith("http") ? url : `${siteUrl}${url}`,
      siteName,
      title: fullTitle,
      description: description.substring(0, 160),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      creator: twitterHandle,
      title: fullTitle,
      description: description.substring(0, 160),
      images: [ogImage],
    },
    alternates: {
      canonical: url.startsWith("http") ? url : `${siteUrl}${url}`,
    },
  };
}

export function generateProductsPageMetadata(): Metadata {
  return {
    title: `Pure Cooking Oils in Salem - Products | ${siteName}`,
    description: "Explore our range of premium edible oils in Salem. Quality coconut, sunflower, and groundnut oils for your kitchen, refined for health and tradition.",
    keywords: "cooking oils Salem, best edible oils Salem Tamil Nadu, groundnut oil price Salem, Sri Jayasakthi oils",
    openGraph: {
      title: `Pure Cooking Oils in Salem - Products | ${siteName}`,
      description: "Explore our range of premium edible oils in Salem",
      url: `${siteUrl}/products`,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Pure Cooking Oils in Salem - Products | ${siteName}`,
      description: "Explore our range of premium edible oils in Salem",
    },
  };
}

export function generateProductMetadata(product: Product): Metadata {
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productImage = product.image.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;

  return {
    title: product.seoTitle || `${product.name} - Best Edible Oil in Salem`,
    description: (product.seoDescription || product.description).substring(0, 160) + (product.seoDescription ? "" : " - Available in Salem, Tamil Nadu."),
    keywords: product.seoKeywords ? `${product.seoKeywords}, Salem, near me` : `${product.name}, edible oil Salem, cooking oil Salem`,
    openGraph: {
      title: product.seoTitle || `${product.name} - ${siteName}`,
      description: (product.seoDescription || product.description).substring(0, 160),
      url: productUrl,
      siteName,
      type: "website",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
        ...(product.imageSecondary ? [{
          url: product.imageSecondary.startsWith("http") ? product.imageSecondary : `${siteUrl}${product.imageSecondary}`,
          width: 1200,
          height: 630,
          alt: `${product.name} Alternate View`,
        }] : []),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle || `${product.name} - ${siteName}`,
      description: (product.seoDescription || product.description).substring(0, 160),
      images: [productImage],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export function generateProductsListStructuredData(products: typeof productsData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Edible Oils Products",
    description: "Premium collection of edible oils",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image.startsWith("http")
          ? product.image
          : `${siteUrl}${product.image}`,
        offers: {
          "@type": "Offer",
          price: product.price.toString().replace(/[^0-9.]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        url: `${siteUrl}/products/${product.slug}`,
      },
    })),
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "ta", "hi"],
    },
    sameAs: [
      // Add social media links if available
    ],
  };
}

export function generateWebSiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateAllProductStructuredData(product: (typeof productsData)[0]) {
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productImage = product.image.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;

  return {
    product: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: productImage,
      brand: {
        "@type": "Brand",
        name: siteName,
      },
      offers: {
        "@type": "Offer",
        price: product.price.toString().replace(/[^0-9.]/g, ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: productUrl,
      },
      aggregateRating: product.rating
        ? {
          "@type": "AggregateRating",
          ratingValue: product.rating.toString(),
          reviewCount: product.reviewCount.toString(),
        }
        : undefined,
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: `${siteUrl}/products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: productUrl,
        },
      ],
    },
    organization: generateOrganizationStructuredData(),
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is ${product.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: product.description,
          },
        },
      ],
    },
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to use ${product.name}`,
      description: `Learn how to use ${product.name} in your cooking`,
      step: [
        {
          "@type": "HowToStep",
          name: "Purchase the product",
          text: `Order ${product.name} from our website`,
        },
        {
          "@type": "HowToStep",
          name: "Store properly",
          text: "Store in a cool, dry place away from direct sunlight",
        },
        {
          "@type": "HowToStep",
          name: "Use in cooking",
          text: "Use as per your cooking requirements",
        },
      ],
    },
    website: generateWebSiteStructuredData(),
  };
}

