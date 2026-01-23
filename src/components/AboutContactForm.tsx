"use client";

import { useState, useMemo } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
    Mail,
    User,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Loader2,
    Send,
} from "lucide-react";
import { indianStates } from "@/lib/indianStatesData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import WorldMap from "./ui/world-map";

// Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    state: z.string().min(1, "Please select a state"),
    district: z.string().min(1, "Please select a district"),
    productInterest: z.string().min(1, "Please select a product interest"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function AboutContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        state: "",
        district: "",
        productInterest: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});
    const [loading, setLoading] = useState(false);

    const availableDistricts = useMemo(() => {
        return formData.state ? indianStates[formData.state]?.districts || [] : [];
    }, [formData.state]);

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    // Product options
    const productTypes = [
        "Coconut Oil (Agmark)",
        "Sesame Oil (Gingelly Oil)",
        "Groundnut Oil",
        "Sunflower Oil",
        "Deepam Lamp Oil",
        "Castor Oil",
        "Vanaspati",
        "Refined Oil",
        "Baker's Choice",
        "Other / General Inquiry"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const result = contactSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Partial<ContactFormData> = {};
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
                }
            });
            setErrors(fieldErrors);
            setLoading(false);
            return;
        }

        try {
            const phoneCode =
                formData.state && indianStates[formData.state]
                    ? `+91-${indianStates[formData.state].stdCode}`
                    : "+91";

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    state: formData.state,
                    district: formData.district,
                    description: `Product Interest: ${formData.productInterest}\n\nMessage: ${formData.message}`,
                    phone: "", // Not asked in design
                    phoneCode,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send email");
            }

            toast.success("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                state: "",
                district: "",
                productInterest: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-10 bg-background">
            <div className="my-5 border-t border-primary/20 max-w-xl mx-auto" />
            <p className="text-center text-lg md:text-3xl tracking-tighter max-w-xl font-regular mx-auto my-10 text-foreground">
                We deliver your order worldwide.
            </p>
            <WorldMap
                lineColor="hsl(var(--primary))"

                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                            label: 'Chennai'
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                            label: 'Dubai'
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919, label: 'Kuwait' }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393, label: 'Kochi' }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209, label: 'New Delhi' }, // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113, label: 'Singapore' }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219, label: 'Sri Lanka' }, // Nairobi
                    },
                ]}
            />
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Keep in touch with us
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Stay ahead of the curve by joining our vibrant community! Connect
                                with us to receive timely updates on products and the latest in
                                premium edible oils.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Address</h3>
                                    <p className="text-muted-foreground">
                                        D.no:383/9, post, near MoolaPillalyar kovil, Pillayar Nagar,
                                        <br />
                                        Kandhampatty, Tamil Nadu 636005
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">+91 94432 34992</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-muted-foreground">
                                        info@srijayasakthi.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                    <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-bold text-lg">Follow Us</h3>
                                    <div className="flex space-x-3">
                                        <a
                                            href="#"
                                            className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                                        >
                                            <Facebook className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                                        >
                                            <Instagram className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                                        >
                                            <MessageCircleIcon className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Send a Message
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Send us your comments! We value your feedback and look forward to
                                hearing from you. Connect with us today!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className={errors.name ? "border-red-500" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Select
                                        value={formData.state}
                                        onValueChange={(value) => {
                                            handleInputChange("state", value);
                                            handleInputChange("district", "");
                                        }}
                                    >
                                        <SelectTrigger
                                            className={errors.state ? "border-red-500" : ""}
                                        >
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(indianStates).map((state) => (
                                                <SelectItem key={state} value={state}>
                                                    {state}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.state && (
                                        <p className="text-sm text-red-500">{errors.state}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="district">District</Label>
                                    <Select
                                        value={formData.district}
                                        onValueChange={(value) => handleInputChange("district", value)}
                                        disabled={!formData.state}
                                    >
                                        <SelectTrigger
                                            className={errors.district ? "border-red-500" : ""}
                                        >
                                            <SelectValue
                                                placeholder={
                                                    formData.state ? "Select District" : "Select State first"
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {availableDistricts.map((district) => (
                                                <SelectItem key={district} value={district}>
                                                    {district}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.district && (
                                        <p className="text-sm text-red-500">{errors.district}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="productInterest">Product Interest</Label>
                                <Select
                                    value={formData.productInterest}
                                    onValueChange={(value) => handleInputChange("productInterest", value)}
                                >
                                    <SelectTrigger className={errors.productInterest ? "border-red-500" : ""}>
                                        <SelectValue placeholder="Select Product" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {productTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.productInterest && (
                                    <p className="text-sm text-red-500">{errors.productInterest}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Enter Message"
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    className={`min-h-[120px] ${errors.message ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#3c8c1e] hover:bg-[#327a19] text-white"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MessageCircleIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    );
}
