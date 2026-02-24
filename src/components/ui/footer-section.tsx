"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import { toast } from "sonner";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Social media links - update these with your actual social media URLs
const socialLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
  whatsapp:
    "https://wa.me/919443234992?text=Hi%20Sri%20Jayasakthi%20Edible%20Oils%2C%20I%20want%20to%20know%20about%20bulk%20orders.",
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Bulk Order", href: "/bulk-order" },
  { name: "Contact Us", href: "/contact" },
];

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Settings", href: "#" },
];

function Footerdemo() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with your actual newsletter subscription endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
          <motion.div
            className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Newsletter Section */}
            <motion.div className="relative" variants={itemVariants}>
              <h2 className="mb-4 text-3xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Join our newsletter for the latest updates, exclusive offers, and industry insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="pr-12 backdrop-blur-sm transition-all focus:ring-2 focus:ring-primary/20"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-all hover:scale-110 active:scale-95",
                    isSubmitted && "bg-green-500"
                  )}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : isSubmitted ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-green-600 dark:text-green-400"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl animate-pulse" />
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3 text-sm">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group block transition-all duration-200 hover:text-primary hover:translate-x-1"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-3 text-sm not-italic">
                <a
                  href="https://maps.google.com/?q=D.no:383/9, post, near MoolaPillaiyar kovil, Pillayar Nagar, Kandhampatty, Tamil Nadu 636005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="leading-relaxed">
                    D.no:383/9, post, near MoolaPillaiyar kovil, Pillayar Nagar, Kandhampatty, Tamil Nadu 636005
                  </span>
                </a>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919443234992"
                    className="group flex items-center gap-3 transition-colors hover:text-primary whitespace-nowrap"
                  >
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    (+91) 94432 34992
                  </a>
                  <a
                    href="tel:+919449333991"
                    className="group flex items-center gap-3 transition-colors hover:text-primary whitespace-nowrap"
                  >
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    (+91) 94493 33991
                  </a>
                  <a
                    href="tel:+919944634299"
                    className="group flex items-center gap-3 transition-colors hover:text-primary whitespace-nowrap"
                  >
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    (+91) 99446 34299
                  </a>
                </div>
                <a
                  href="mailto:info@srijayasaktiedibileoils"
                  className="group flex items-center gap-3 transition-colors hover:text-primary break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>info@srijayasaktiedibileoils</span>
                </a>
              </address>
            </motion.div>

            {/* Social Media */}
            <motion.div className="relative" variants={itemVariants}>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Connect with us on social media for updates and news.
              </p>
              <div className="mb-6 flex flex-wrap gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full transition-all hover:scale-110 bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                      >
                        <a
                          href={socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full transition-all hover:scale-110 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent hover:from-purple-600 hover:to-pink-600"
                      >
                        <a
                          href={socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full transition-all hover:scale-110 bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                      >
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full transition-all hover:scale-110 bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600"
                      >
                        <a
                          href={socialLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Chat with us on WhatsApp</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 text-center md:flex-row"
            variants={itemVariants}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sri Jayasakthi Edible Oils Pvt. Ltd. All rights reserved.
            </p>
            <Link
              href="https://myenum.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-all hover:scale-105"
            >
              <span className="text-sm text-muted-foreground group-hover:text-primary">
                created by
              </span>
              <span className="text-sm font-bold group-hover:text-primary">MyEnum</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="transition-colors hover:text-primary relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export { Footerdemo };
