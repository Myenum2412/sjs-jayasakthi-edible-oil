"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import AboutContactForm from "@/components/AboutContactForm";

interface AboutPageProps {
  achievements?: Array<{ label: string; value: string }>;
}

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export default function AboutPage({
  achievements = defaultAchievements,
}: AboutPageProps) {
  return (
    <div className="flex flex-col">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-10  bg-background">
        <div className="mx-auto max-w-6xl space-y-2 px-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Image
              className="rounded-xl object-cover w-full h-[240px] md:h-[460px]"
              src="/banner/banner.jpg"
              alt="Hero section image"
              width={1200}
              height={600}
              priority
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-12 my-5">
            <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Bulk Ordering <span className="text-primary">Made Simple</span>
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <div className="text-lg md:text-xl tracking-tighter font-regular text-left space-y-4">
                <p>
                  Direct from the factory to your business. Premium edible oils at competitive wholesale rates.
                </p>
                <p>
                  At Sri Jayasakthi Edible Oils Pvt Ltd, we understand that businesses need reliability just as much as quality. Whether you are stocking supermarket shelves, running a large kitchen, managing hotel operations, or handling temple requirements, we offer flexible bulk ordering solutions tailored to your needs.
                </p>
                <p>
                  Supply your customers with oils that are ISO 9001:2015 Certified and packed with the trust of a legacy dating back to 1980. Our production capacity of 50,000+ tins ensures consistent supply for your business needs.
                </p>
              </div>
              <Button
                asChild
                variant="default"
                size="sm"
                className="gap-1 pr-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/products">
                  <span>View Products</span>
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <AboutContactForm />
    </div>
  );
}
