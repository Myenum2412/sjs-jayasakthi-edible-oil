import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import { Footerdemo } from "@/components/ui/footer-section";

const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sri Jayasakthi Edible Oils Pvt. Ltd",
  description: "Sri Jayasakthi Edible Oils Pvt. Ltd is a leading manufacturer and supplier of edible oils and related products in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <HeroHeader />
        {children}
        <Footerdemo/>
      </body>
    </html>
  );
}
