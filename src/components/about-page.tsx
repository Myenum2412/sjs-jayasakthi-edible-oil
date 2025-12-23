"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
              src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg"
              alt="Hero section image"
              width={1200}
              height={600}
              priority
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-12 my-5">
            <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              The <span className="text-primary">Purity</span> <span className="text-primary">ecosystem</span>{" "}
            </h1>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
              Direct from the factory to your business. Premium oils at competitive wholesale rates.
              <br />
              At Sri Jayasakthi Edible Oils Pvt Ltd, we understand that businesses need reliability just as much as quality. Whether you are stocking supermarket shelves, running a large kitchen, or managing temple requirements, we offer flexible bulk ordering solutions tailored to your needs.

Supply your customers with oils that are ISO 9001:2015 Certified and packed with the trust of a legacy dating back to 1995.
              </p>
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

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-2 md:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          {/* Header */}
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              World wide delivery
            </h1>
            <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
              We deliver your order worldwide.
            </p>
          </div>

          {/* ---------------- LAST THREE CARDS (NEW LAYOUT) ---------------- */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">
            {/* LEFT BIG IMAGE */}
            <div className="md:flex-1">
              <Image
                src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_chat_gradient.png"
                alt="Left big image"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[360px] md:h-[100%]"
                width={800}
                height={550}
              />
            </div>

            {/* RIGHT TWO CARDS */}
            <div className="flex flex-col gap-6 md:flex-1">
              {/* FIRST CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-black text-white shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-60 sm:h-64 md:h-48 w-full overflow-hidden"
                >
                  <Image
                    src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon.png"
                    alt="Card Image"
                    className="h-full w-full object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black via-black/70 to-transparent" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">Accelerate Growth</h3>
                  <p className="mt-2 text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
                    Our solutions drive innovation, efficiency, and measurable
                    impact for businesses.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* SECOND CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-muted shadow-lg"
              >
                <Image
                  src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg"
                  alt="Secondary card"
                  className="h-full w-full object-cover min-h-[220px] sm:min-h-[240px] md:min-h-[220px]"
                  width={600}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">Future-Ready Design</h3>
                  <p className="mt-2 text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
                    Intuitive, scalable designs for modern businesses combining
                    aesthetics and functionality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
