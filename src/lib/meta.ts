import type { Metadata } from "next";
import { productsData } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sri-jayasakthi-oils.com";
const siteName = "Sri Jayasakthi Edible Oils Pvt. Ltd";
const defaultDescription = "Sri Jayasakthi Edible Oils Pvt. Ltd is a leading manufacturer and supplier of edible oils and related products in India.";
const defaultKeywords = "edible oils, cooking oils, coconut oil, sunflower oil, groundnut oil, vegetable oil, vanaspati, rice bran oil, Sri Jayasakthi, India";
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
    title: fullTitle,
    description: description.substring(0, 160),
    keywords: keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
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
      url,
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
      canonical: url,
    },
  };
}

export function generateProductsPageMetadata(): Metadata {
  return {
    title: `Products - ${siteName}`,
    description: "Browse our premium collection of edible oils including coconut oil, sunflower oil, groundnut oil, and more. Quality products for your kitchen.",
    keywords: "edible oils, cooking oils, coconut oil, sunflower oil, groundnut oil, vegetable oil, Sri Jayasakthi",
    openGraph: {
      title: `Products - ${siteName}`,
      description: "Browse our premium collection of edible oils",
      url: `${siteUrl}/products`,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Products - ${siteName}`,
      description: "Browse our premium collection of edible oils",
    },
  };
}

export function generateProductMetadata(product: {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  seoKeywords?: string;
}): Metadata {
  const productUrl = `${siteUrl}/products/${product.id}`;
  const productImage = product.image.startsWith("http")
    ? product.image
    : `${siteUrl}${product.image}`;

  return {
    title: `${product.name} - ${siteName}`,
    description: product.description.substring(0, 160),
    keywords: product.seoKeywords || `${product.name}, edible oil, cooking oil`,
    openGraph: {
      title: `${product.name} - ${siteName}`,
      description: product.description.substring(0, 160),
      url: productUrl,
      siteName,
      type: "website",
      images: [
        {
          url: productImage,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - ${siteName}`,
      description: product.description.substring(0, 160),
      images: [productImage],
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
          price: product.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        url: `${siteUrl}/products/${product.id}`,
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
  const productUrl = `${siteUrl}/products/${product.id}`;
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
        price: product.price.replace(/[^0-9.]/g, ""),
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

