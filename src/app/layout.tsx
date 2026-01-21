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

const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = generateBaseMetadata({
  title: "Sri Jayasakthi Edible Oils Pvt. Ltd",
  description: "Sri Jayasakthi Edible Oils Pvt. Ltd is a leading manufacturer and supplier of edible oils and related products in India. Quality cooking oils including coconut oil, sunflower oil, groundnut oil, and more.",
  keywords: "edible oils, cooking oils, coconut oil, sunflower oil, groundnut oil, vegetable oil, vanaspati, rice bran oil, Sri Jayasakthi, India",
  image: "/logo.png",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sri-jayasakthi-oils.com";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for common resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sri Jayasakthi Edible Oils Pvt. Ltd",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: "Leading manufacturer and supplier of edible oils and related products in India",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["en", "ta", "hi"],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundaryWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            <QueryProvider>
              <ConditionalLayout>
                {children}
                <FloatingContactButton />
              </ConditionalLayout>
              <Toaster position="top-right" richColors />
              <WebVitals />
            </QueryProvider>
          </ThemeProvider>
        </ErrorBoundaryWrapper>

        <WebVitalsScript />
      </body>
    </html>
  );
}
