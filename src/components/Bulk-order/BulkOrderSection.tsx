"use client";

import { Button } from "@/components/ui/button";
import AboutPage from "@/components/about-page";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import Link from "next/link";
import { MoveRight, PhoneCall } from "lucide-react";

const BulkOrderSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Bulk Order" }
        ]}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl tracking-tighter max-w-xl font-regular text-left text-foreground">
          Bulk Orders Made Simple.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight font-regular text-left max-w-2xl text-muted-foreground">
          Looking to place high-volume orders? We offer customized pricing, reliable supply, and dedicated support tailored for bulk and enterprise requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="gap-4" asChild>
            <Link href="/contact?type=bulk">
              Request Bulk Quote <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-4" asChild>
            <Link href="tel:+919842721115">
              Talk to Sales Team <PhoneCall className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <AboutPage />
      </div>
    </section>
  );
};

export default BulkOrderSection;
