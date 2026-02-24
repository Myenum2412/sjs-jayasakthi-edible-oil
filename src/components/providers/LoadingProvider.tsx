"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/kokonutui/loader";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initial loading logic
        const handleInitialLoad = async () => {
            try {
                // Here you would add any critical API calls or initial state setup
                // For example:
                // await Promise.all([
                //   fetchConfig(),
                //   fetchInitialData(),
                // ]);

                // Simulating a minimum loading time for smooth transition and to ensure initial assets are ready
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (error) {
                console.error("Initial load failed:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleInitialLoad();
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                    >
                        <Loader
                            title="Sri Jayasakthi Edible Oils"
                            subtitle="Purity in Every Drop, Tradition in Every Step"
                            size="lg"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </LoadingContext.Provider>
    );
}
