"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, User, LogOut, Settings, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { useScroll, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { productsData } from "@/data/products";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Bulk Order", href: "/bulk-order" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuState]);

  // Close search on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  // Group products by name and show all size variants
  const filteredProducts = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    
    // Group products by name
    const productGroups = new Map<string, typeof productsData>();
    
    productsData.forEach((product) => {
      // Check if product matches search query
      const matches =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.type?.toLowerCase().includes(query) ||
        product.size?.toLowerCase().includes(query);
      
      if (matches) {
        const productName = product.name.toLowerCase();
        if (!productGroups.has(productName)) {
          productGroups.set(productName, []);
        }
        productGroups.get(productName)!.push(product);
      }
    });
    
    // Convert map to array and limit results
    const groupedResults: Array<{
      name: string;
      variants: typeof productsData;
      primaryProduct: (typeof productsData)[0];
    }> = [];
    
    productGroups.forEach((variants, name) => {
      // Sort variants by size (extract numeric value for sorting)
      const sortedVariants = [...variants].sort((a, b) => {
        const sizeA = parseFloat(a.size?.replace(/[^\d.]/g, '') || '0');
        const sizeB = parseFloat(b.size?.replace(/[^\d.]/g, '') || '0');
        return sizeA - sizeB;
      });
      
      groupedResults.push({
        name: variants[0].name, // Use original casing
        variants: sortedVariants,
        primaryProduct: sortedVariants[0], // First variant as primary
      });
    });
    
    return groupedResults.slice(0, 6); // Limit to 6 product groups
  }, [searchQuery]);

  const handleProductClick = React.useCallback((productId: number) => {
    router.push(`/products/${productId}`);
    setSearchOpen(false);
    setSearchQuery("");
  }, [router]);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed z-50 w-full pt-2"
      >
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(var(--background), 0.8)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            boxShadow: scrolled
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-screen-xl rounded-3xl px-4 sm:px-6 lg:px-12"
        >
          <motion.div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-4 py-3 transition-all duration-200 lg:gap-6 lg:py-4",
              scrolled && "lg:py-3"
            )}
          >
            {/* Logo */}
            <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="group flex items-center space-x-3 transition-transform hover:scale-105"
                onClick={() => setMenuState(false)}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-10 md:w-14"
                    priority
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <h1 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                    Sri Jayasakthi Edible Oils Pvt Ltd
                  </h1>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-50 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
              >
                <AnimatePresence mode="wait">
                  {menuState ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              <ul className="flex items-center gap-1 text-sm">
                {menuItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative px-4 py-2 rounded-lg transition-all duration-200",
                          active
                            ? "text-primary font-medium"
                            : "text-neutral-700 hover:text-primary dark:text-neutral-300"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {active && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-lg bg-primary/10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {/* Underline animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: active ? 1 : 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="rounded-full"
                aria-label="Search"
              >
                <Search className="size-5" />
              </Button>

              {/* User Menu or Login Button */}
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      aria-label="User menu"
                    >
                      <User className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        <User className="mr-2 size-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders" className="cursor-pointer">
                        <ShoppingCart className="mr-2 size-4" />
                        Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">
                        <Settings className="mr-2 size-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-red-600 focus:text-red-600"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <LogOut className="mr-2 size-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuState && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-3xl border bg-background/95 backdrop-blur-xl shadow-2xl lg:hidden"
                >
                  <div className="flex flex-col gap-6 p-6">
                    {/* Mobile Navigation Links */}
                    <nav className="space-y-2">
                      {menuItems.map((item, index) => {
                        const active = isActive(item.href);
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setMenuState(false)}
                              className={cn(
                                "group relative block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                                active
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              {item.name}
                              {/* Mobile underline animation */}
                              <motion.div
                                className="absolute bottom-2 left-4 right-4 h-0.5 bg-primary origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: active ? 1 : 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    {/* Mobile Actions */}
                    <div className="flex flex-col gap-3 border-t pt-4">
                      <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-sm font-medium">Theme</span>
                        <ThemeToggle />
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          setSearchOpen(!searchOpen);
                          setMenuState(false);
                        }}
                      >
                        <Search className="mr-2 size-4" />
                        Search
                      </Button>
                      {isLoggedIn ? (
                        <>
                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/profile">
                              <User className="mr-2 size-4" />
                              Profile
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-red-600"
                            onClick={() => {
                              setIsLoggedIn(false);
                              setMenuState(false);
                            }}
                          >
                            <LogOut className="mr-2 size-4" />
                            Log out
                          </Button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Search Overlay with Product Cards */}
        <AnimatePresence>
          {searchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="fixed left-1/2 top-20 z-50 w-full max-w-4xl -translate-x-1/2 px-4"
              >
                <div className="rounded-2xl border bg-background shadow-2xl overflow-hidden">
                  {/* Search Input */}
                  <div className="flex items-center gap-3 p-4 border-b">
                    <Search className="size-5 text-muted-foreground shrink-0" />
                    <input
                      type="text"
                      placeholder="Search products, pages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-base"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="rounded-full shrink-0"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>

                  {/* Search Results */}
                  <div className="max-h-[60vh] overflow-y-auto">
                    {searchQuery.trim() ? (
                      filteredProducts.length > 0 ? (
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} with {filteredProducts.reduce((sum, group) => sum + group.variants.length, 0)} variant{filteredProducts.reduce((sum, group) => sum + group.variants.length, 0) !== 1 ? "s" : ""}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredProducts.map((productGroup) => (
                              <motion.div
                                key={productGroup.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="group rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                              >
                                <div className="flex gap-4 mb-3">
                                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                                    <Image
                                      src={productGroup.primaryProduct.image}
                                      alt={productGroup.name}
                                      fill
                                      className="object-contain p-2 transition-transform group-hover:scale-110"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                      {productGroup.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                      {productGroup.primaryProduct.description}
                                    </p>
                                  </div>
                                      </div>
                                
                                {/* Size Variants */}
                                <div className="mt-3 pt-3 border-t border-border">
                                  <p className="text-xs font-medium text-muted-foreground mb-2">
                                    Available Sizes:
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {productGroup.variants.map((variant) => (
                                      <motion.button
                                        key={variant.id}
                                        onClick={() => handleProductClick(variant.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="cursor-pointer text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20 hover:border-primary"
                                      >
                                        {variant.size}
                                      </motion.button>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 text-center">
                          <p className="text-muted-foreground">
                            No products found for &quot;{searchQuery}&quot;
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Try searching with different keywords
                          </p>
                        </div>
                      )
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
