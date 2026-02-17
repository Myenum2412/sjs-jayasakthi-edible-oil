"use client";

import * as React from "react";
import { ShoppingCart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductActionsProps {
    productName: string;
}

export function ProductActions({ productName }: ProductActionsProps) {
    return (
        <div className="flex gap-2 my-6">
            <Button size="lg" className="flex-1 gap-2 rounded-full">
                <ShoppingCart className="h-5 w-5" /> Buy Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
                <a href="tel:919443233991">
                    <Send className="h-5 w-5" /> Contact Seller
                </a>
            </Button>
        </div>
    );
}
