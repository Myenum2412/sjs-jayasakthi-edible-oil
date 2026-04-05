import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import FloatingContactButton from "@/components/FloatingContactButton";
import { QueryProvider } from "@/lib/query-client";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundaryWrapper } from "@/components/ErrorBoundaryWrapper";
import { generateMetadata as generateBaseMetadata } from "@/lib/meta";
import { WebVitals } from "@/components/WebVitals";
import { WebVitalsScript } from "@/components/WebVitalsScript";
import Script from "next/script";
import { LoadingProvider } from "@/components/providers/LoadingProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Jayasakthi Edible Oils Pvt. Ltd",
  description:
    "Sri Jayasakthi Edible Oils Pvt. Ltd is a leading manufacturer and supplier of edible oils and related products in India. Quality cooking oils including coconut oil, sunflower oil, groundnut oil, and more.",
  keywords:
    "edible oils, cooking oils, coconut oil, sunflower oil, groundnut oil, vegetable oil, vanaspati, rice bran oil, Sri Jayasakthi, India",
  image: "/logo.png",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.srijayasaktiedibileoils.com";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.png" />

        {/* Geo Location Metadata for Salem, Tamil Nadu */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Salem" />
        <meta name="geo.position" content="11.6643;78.1460" />
        <meta name="ICBM" content="11.6643, 78.1460" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Critical resource preloading for LCP */}
        <link rel="preload" as="image" href="/images/aboutus.png" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteUrl}/#business`,
              name: "Sri Jayasakthi Edible Oils Pvt. Ltd",
              alternateName: "Sri Jayasakthi Oils",
              description: "Leading manufacturer and supplier of edible oils in Salem, Tamil Nadu. Quality cooking oils including coconut oil, sunflower oil, groundnut oil since 1985.",
              url: siteUrl,
              telephone: "+91-427-2234567",
              email: "info@srijayasaktiedibileoils.com",
              priceRange: "₹₹",
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
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00"
                }
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "11.6643",
                  longitude: "78.1460"
                },
                geoRadius: "100 km"
              },
              servesCuisine: "Indian",
              sameAs: [],
              brand: {
                "@type": "Brand",
                name: "Sri Jayasakthi Edible Oils"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "250",
                bestRating: "5"
              }
            }),
          }}
        />

        {/* Geo Location Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: "Sri Jayasakthi Edible Oils",
              description: "Edible oil manufacturing facility in Salem, Tamil Nadu",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.6643",
                longitude: "78.1460"
              }
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sri Jayasakthi Edible Oils Pvt. Ltd",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description:
                "Leading manufacturer and supplier of edible oils and related products in India",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["en", "ta", "hi"],
              },
            }),
          }}
        />

        {/* Website Search Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/products?search={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              ],
            }),
          }}
        />

        {/* FAQ Schema for SERP features */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                    text: "Yes, we provide bulk oil supply across Tamil Nadu including Salem, Namakkal, Erode, Coimbatore, and other districts."
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
            }),
          }}
        />
      </head>

      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5W2ZTPYWMG"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5W2ZTPYWMG');
          `}
        </Script>

        <ErrorBoundaryWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <QueryProvider>
              <LoadingProvider>
                <ConditionalLayout>
                  {children}
                  <FloatingContactButton />
                </ConditionalLayout>
                <Toaster position="top-right" richColors />
                <WebVitals />
              </LoadingProvider>
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundaryWrapper>

        <WebVitalsScript />
      </body>
    </html>
  );
}
