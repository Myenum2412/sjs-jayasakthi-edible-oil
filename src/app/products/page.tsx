import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductsSection from '@/components/products/ProductsSection'
import React from 'react'
import { productsData } from '@/data/products'
import {
  generateProductsPageMetadata,
  generateProductsListStructuredData,
  generateOrganizationStructuredData,
  generateWebSiteStructuredData,
} from '@/lib/meta'

export const metadata = generateProductsPageMetadata()

function page() {
  // Generate advanced structured data
  const itemListStructuredData = generateProductsListStructuredData(productsData);
  const organizationStructuredData = generateOrganizationStructuredData();
  const websiteStructuredData = generateWebSiteStructuredData();

  return (
    <>
      {/* Advanced Structured Data for Products Listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <MaxWidthWrapper>
        <ProductsSection/>
      </MaxWidthWrapper>
    </>
  )
}

export default page