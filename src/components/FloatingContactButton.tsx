"use client";

import { useCallback, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { indianStates } from "@/lib/indianStatesData";

/* ---------- Types ---------- */
interface FormData {
  name: string;
  email: string;
  phone: string;
  phoneCode: string;
  state: string;
  district: string;
  description: string;
}

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    phoneCode: "+91",
    state: "",
    district: "",
    description: "",
  });

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
        ...(field === "state" ? { district: "", phoneCode: indianStates[value]?.stdCode ? `+91-${indianStates[value].stdCode}` : "+91" } : {}),
      }));
    },
    []
  );

  const availableDistricts = useMemo(() => {
    return formData.state ? (indianStates[formData.state]?.districts || []) : [];
  }, [formData.state]);

  const currentPhoneCode = useMemo(() => {
    if (formData.state && indianStates[formData.state]) {
      return `+91-${indianStates[formData.state].stdCode}`;
    }
    return "+91";
  }, [formData.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          phoneCode: currentPhoneCode,
          state: formData.state,
          district: formData.district,
          description: formData.description,
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
      phone: "",
        phoneCode: "+91",
      state: "",
      district: "",
      description: "",
    });

    setIsOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
    setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-4 text-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">Get in Touch</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative w-full max-w-2xl rounded-xl bg-card p-6 shadow-xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4"
                >
                  <X />
                </button>

                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  We’ll contact you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>
                        <User className="inline h-4 w-4" /> Name *
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>
                        <Mail className="inline h-4 w-4" /> Email *
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone with Code */}
                  <div className="space-y-2">
                    <Label>
                      <Phone className="inline h-4 w-4" /> Phone *
                    </Label>
                    <div className="flex">
                      <span className="flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm font-medium">
                        {currentPhoneCode}
                      </span>
                      <Input
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Mobile number"
                        className="rounded-l-none"
                        required
                        type="tel"
                        maxLength={10}
                      />
                    </div>
                    {formData.state && (
                      <p className="text-xs text-muted-foreground">
                        STD Code: {indianStates[formData.state]?.stdCode || "N/A"}
                      </p>
                    )}
                  </div>

                  {/* State & District */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Select
                      value={formData.state}
                      onValueChange={(v) =>
                        handleInputChange("state", v)
                      }
                    >
                      <SelectTrigger>
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

                    <Select
                      value={formData.district}
                      onValueChange={(v) =>
                        handleInputChange("district", v)
                      }
                      disabled={!formData.state}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select District" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDistricts.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label>
                      <FileText className="inline h-4 w-4" /> Description
                    </Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
