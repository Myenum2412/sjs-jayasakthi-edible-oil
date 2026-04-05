import type { Metadata } from "next";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { generateMetadata as generateBaseMetadata } from "@/lib/meta";
import ProductsList from "@/components/products/ProductsList";
import { productsData } from "@/data/products";
import { PhoneCall, MailOpen, MapPin, Clock, Truck, Award, Heart } from "lucide-react";

export const metadata: Metadata = generateBaseMetadata({
  title: "Best Edible Oils in Salem | Sri Jayasakthi Edible Oils - Premium Cooking Oils",
  description: "Buy premium edible oils in Salem, Tamil Nadu. Sri Jayasakthi offers coconut oil, groundnut oil, sunflower oil, rice bran oil & more. Factory direct prices, free delivery across Salem since 1985.",
  keywords: "best edible oils Salem, buy cooking oil Salem, coconut oil Salem Tamil Nadu, groundnut oil shop Salem, sunflower oil near me Salem, bulk oil suppliers Salem Tamil Nadu, edible oil manufacturer Salem, pure cooking oil Salem, wholesale oils Salem, best price edible oils Salem",
  url: "/salem",
});

export default function SalemPage() {
  const salemProducts = productsData;

  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Salem, Tamil Nadu</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Best Edible Oils in <span className="text-primary">Salem</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Sri Jayasakthi Edible Oils - Salem's trusted name in quality cooking oils since 1985.
              We deliver premium edible oils across Salem and throughout Tamil Nadu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#products" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Browse Products
              </Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1985</div>
              <div className="text-primary-foreground/80 text-sm">Years in Salem</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250+</div>
              <div className="text-primary-foreground/80 text-sm">Local Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50km</div>
              <div className="text-primary-foreground/80 text-sm">Delivery Radius</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80 text-sm">Pure Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Salem Specific */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Salem Chooses Sri Jayasakthi
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your trusted local edible oil supplier in Salem, Tamil Nadu
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Since 1985</h3>
              <p className="text-muted-foreground text-sm">
                Over 35 years of trust and excellence in edible oil manufacturing in Salem
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Presence</h3>
              <p className="text-muted-foreground text-sm">
                Conveniently located in Kandhampatty, Salem for easy access and quick deliveries
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">₹</span>
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground text-sm">
                Factory direct pricing for Salem customers. No middleman, no extra costs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Free delivery across Salem for orders above ₹500. Same-day delivery available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Edible Oil Products in Salem
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Premium quality cooking oils available in Salem. Pure, fresh, and packed with nutrition.
            Shop now for the best edible oils in Salem, Tamil Nadu.
          </p>
          <ProductsList products={salemProducts} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing the Right Oil?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the perfect edible oil for your needs.
              Call us now for personalized recommendations and free delivery quote in Salem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919443234992"
                className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-primary-foreground transition-colors"
              >
                <PhoneCall className="h-5 w-5" />
                +91 94432 34992
              </a>
              <a
                href="mailto:info@srijayasakthioils.com"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <MailOpen className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://sri-jayasakthi-oils.com/salem",
            name: "Sri Jayasakthi Edible Oils - Salem",
            description: "Best edible oils in Salem, Tamil Nadu. Premium cooking oils including coconut oil, groundnut oil, sunflower oil, rice bran oil. Factory direct prices with free delivery across Salem.",
            url: "https://sri-jayasakthi-oils.com/salem",
            telephone: "+91-94432-34992",
            address: {
              "@type": "PostalAddress",
              streetAddress: "D.no:383/9, post, near MoolaPillaiyar kovil, Pillayar Nagar, Kandhampatty",
              addressLocality: "Salem",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
              postalCode: "636005"
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
              geoRadius: "50 km"
            },
            priceRange: "₹₹"
          }),
        }}
      />
    </MaxWidthWrapper>
  );
}
