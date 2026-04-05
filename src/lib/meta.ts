import type { Metadata } from "next";
import { productsData, Product } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.srijayasaktiedibileoils.com";
const siteName = "Sri Jayasakthi Edible Oils - Salem's Trusted Brand";
const defaultDescription = "Sri Jayasakthi Edible Oils Pvt. Ltd is Salem's leading manufacturer of premium edible oils. Purity and quality since 1985 for homes and businesses in Salem, Tamil Nadu.";
// Tamil Nadu and Salem-focused local keywords for geo-targeting
const defaultKeywords = "edible oils Salem, cooking oils Salem Tamil Nadu, coconut oil Salem, groundnut oil Salem, sunflower oil Salem, bulk oil suppliers Salem, edible oil manufacturer Salem, pure coconut oil Salem, wholesale cooking oils Tamil Nadu, edible oil distributor Salem, cooking oil supplier Namakkal, best quality oil Tamil Nadu, palm oil Salem, rice bran oil Tamil Nadu, mustard oil Salem, gingelly oil Salem, edible oil shop near me Salem, best cooking oil Salem Tamil Nadu, wholesale edible oils Salem, bulk oil suppliers Tamil Nadu";
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
    description: "Explore our range of premium edible oils in Salem, Tamil Nadu. Quality coconut, sunflower, and groundnut oils for your kitchen, refined for health and tradition. Bulk orders welcome across Tamil Nadu.",
    keywords: "cooking oils Salem, best edible oils Salem Tamil Nadu, groundnut oil price Salem, Sri Jayasakthi oils, edible oil shop Salem, coconut oil near me Tamil Nadu, wholesale cooking oils Namakkal, bulk oil suppliers Erode",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "NH-44, Attur Main Road",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      postalCode: "636001"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.6643",
      longitude: "78.1460"
    },
    telephone: "+91-427-2234567",
    email: "info@srijayasaktiedibileoils.com",
    priceRange: "₹₹",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "ta", "hi"],
      telephone: "+91-427-2234567"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "11.6643",
        longitude: "78.1460"
      },
      geoRadius: "100 km"
    },
    sameAs: [],
    foundingDate: "1985",
    brand: {
      "@type": "Brand",
      name: "Sri Jayasakthi Edible Oils"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250"
    }
  };
}

// Generate FAQPage schema for FAQ Schema markup - helps with SERP features
export function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Sri Jayasakthi Edible Oils located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sri Jayasakthi Edible Oils Pvt. Ltd is located in Salem, Tamil Nadu, India. We are a leading manufacturer and supplier of edible oils in the region since 1985."
        }
      },
      {
        "@type": "Question",
        name: "What types of edible oils do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a wide range of premium edible oils including coconut oil, groundnut oil, sunflower oil, palm oil, rice bran oil, mustard oil, and gingelly oil. All our oils are pure and of the highest quality."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide bulk oil supply in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide bulk oil supply across Tamil Nadu including Salem, Namakkal, Erode, Coimbatore, and other districts. Contact us for bulk order inquiries."
        }
      },
      {
        "@type": "Question",
        name: "What is the minimum order quantity for bulk orders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer flexible bulk order quantities to meet the needs of both retailers and industrial clients. Please contact our sales team for specific pricing and minimum order requirements."
        }
      },
      {
        "@type": "Question",
        name: "Are your oils suitable for commercial cooking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our oils are ideal for hotels, restaurants, caterers, and food processing industries. We supply to many commercial establishments across Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        name: "How can I place a bulk order for edible oils?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can place bulk orders through our website's bulk order page, call us at +91-427-2234567, or email us at info@srijayasaktiedibileoils.com."
        }
      }
    ]
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

