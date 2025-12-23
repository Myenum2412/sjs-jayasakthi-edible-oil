"use client";

import { usePathname } from "next/navigation";
import { HeroHeader } from "@/components/header";
import { Footerdemo } from "@/components/ui/footer-section";

export function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {!isLoginPage && <HeroHeader />}
      {children}
      {!isLoginPage && <Footerdemo />}
    </>
  );
}

