/**
 * SEO utility functions
 */

/**
 * Generates canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sri-jayasakthi-oils.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Truncates text for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Generates breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates article structured data
 */
export function generateArticleStructuredData(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Sri Jayasakthi Edible Oils Pvt. Ltd",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sri-jayasakthi-oils.com'}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

/**
 * Generates FAQ structured data
 */
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates local business structured data
 */
export function generateLocalBusinessStructuredData(business: {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email?: string;
  openingHours?: string[];
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    telephone: business.phone,
    ...(business.email && { email: business.email }),
    ...(business.openingHours && { openingHoursSpecification: business.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1]?.split('-')[0],
      closes: hours.split(' ')[1]?.split('-')[1],
    })) }),
    ...(business.priceRange && { priceRange: business.priceRange }),
  };
}
