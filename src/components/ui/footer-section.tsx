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
  Twitter,
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.11 17.41c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14-.18.28-.7.91-.86 1.1-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.35-.25.28-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32Z" />
      <path d="M26.67 5.33A14.5 14.5 0 0 0 3.58 22.3L2 30l7.86-1.55A14.5 14.5 0 0 0 30.5 16c0-3.87-1.5-7.51-3.83-10.67Zm-10.67 23a12 12 0 0 1-6.1-1.67l-.44-.26-4.66.92.94-4.54-.29-.47A12 12 0 1 1 28 16c0 6.63-5.37 12-12 12Z" />
    </svg>
  );
}

// Social media links - update these with your actual social media URLs
const socialLinks = {
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
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
                <a
                  href="tel:+919443234992"
                  className="group flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>(+91) 94432 34992</span>
                </a>
                <a
                  href="mailto:info@sriJayasakthiedibleoil.com"
                  className="group flex items-center gap-3 transition-colors hover:text-primary break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>info@sriJayasakthiedibleoil.com</span>
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
                        className="rounded-full transition-all hover:scale-110 hover:bg-blue-500 hover:text-white hover:border-blue-500"
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
                        className="rounded-full transition-all hover:scale-110 hover:bg-sky-500 hover:text-white hover:border-sky-500"
                      >
                        <a
                          href={socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
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
                        className="rounded-full transition-all hover:scale-110 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent"
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
                        className="rounded-full transition-all hover:scale-110 hover:bg-blue-600 hover:text-white hover:border-blue-600"
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
                        className="rounded-full transition-all hover:scale-110 hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
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
