import type { Metadata } from "next";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { generateMetadata as generateBaseMetadata } from "@/lib/meta";
import ProductsList from "@/components/products/ProductsList";
import { productsData } from "@/data/products";
import { PhoneCall, MailOpen, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = generateBaseMetadata({
  title: "Best Edible Oils in Salem | Sri Jayasakthi Edible Oils",
  description: "Discover Salem's finest edible oils. Sri Jayasakthi offers premium coconut oil, groundnut oil, sunflower oil & more. Trusted manufacturer since 1985. Free delivery in Salem.",
  keywords: "edible oils Salem, cooking oil Salem, coconut oil Salem, groundnut oil Salem, sunflower oil Salem, edible oil manufacturer Salem, best oil shop Salem, bulk oil suppliers Salem",
  url: "/products/salem",
});

export default function SalemProductsPage() {
  const salemProducts = productsData;

  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Best Edible Oils in <span className="text-primary">Salem</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Sri Jayasakthi Edible Oils - Salem's trusted name in quality cooking oils since 1985.
              We deliver premium edible oils across Salem, Tamil Nadu.
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

      {/* Why Choose Us - Salem Specific */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Salem Chooses Sri Jayasakthi
          </h2>
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
                <PhoneCall className="h-8 w-8 text-primary" />
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
            Our Edible Oil Products
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Premium quality cooking oils sourced from the best suppliers.
            All products are pure, fresh, and packed with nutrition.
          </p>
          <ProductsList products={salemProducts} />
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Edible Oils in Salem - Our Specialty
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Sri Jayasakthi Edible Oils is Salem's leading manufacturer and supplier of premium cooking oils.
                Whether you need <strong>coconut oil</strong> for traditional South Indian cooking,
                <strong> groundnut oil</strong> for frying, or <strong>sunflower oil</strong> for health-conscious cooking,
                we have it all.
              </p>
              <h3>Our Product Range</h3>
              <ul>
                <li><strong>Coconut Oil:</strong> Pure and refined, ideal for cooking and hair care</li>
                <li><strong>Groundnut Oil:</strong> Perfect for deep frying with high smoke point</li>
                <li><strong>Sunflower Oil:</strong> Light and healthy for everyday cooking</li>
                <li><strong>Palm Oil:</strong> Cost-effective for bulk cooking</li>
                <li><strong>Rice Bran Oil:</strong> Heart-healthy option rich in antioxidants</li>
              </ul>
              <h3>Serving Salem and Surrounding Areas</h3>
              <p>
                We proudly serve customers across Salem district including Attur, Namakkal, Mettur,
                Omalur, and surrounding areas. Our efficient delivery network ensures fresh products
                reach your doorstep quickly.
              </p>
              <h3>Bulk Orders Welcome</h3>
              <p>
                Restaurants, hotels, and catering services in Salem can avail bulk orders at competitive prices.
                Contact us directly for custom quotes and free delivery within Salem.
              </p>
            </div>
          </div>
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
              Call us now for personalized recommendations.
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
                href="mailto:info@srijayasaktiedibileoils.com"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <MailOpen className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
