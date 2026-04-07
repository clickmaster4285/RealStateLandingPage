'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Mail, Phone, MapPin, Clock, Send, Building, Navigation, CheckCircle2 } from "lucide-react";

const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-card {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .contact-card:nth-child(1) { animation-delay: 0.1s; }
  .contact-card:nth-child(2) { animation-delay: 0.2s; }
  .contact-card:nth-child(3) { animation-delay: 0.3s; }
  .contact-card:nth-child(4) { animation-delay: 0.4s; }

  .contact-section {
    animation: slideInUp 0.6s ease-out 0.2s both;
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .success-screen {
    animation: scaleIn 0.5s ease-out forwards;
  }
`;

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  services: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  company: z.string().optional(),
  budget: z.string().optional()
});

// Infer form types
type ContactFormData = z.infer<typeof contactSchema>;

const LOCATION = {
  name: "ClickMasters - Real Estate POS",
  address: "Paris Shopping Mall, 4th floor, PWD",
  fullAddress: "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
  lat: 33.6844,
  lng: 73.0479,
};

const FALLBACK_MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION.fullAddress)}&output=embed`;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
      company: "",
      budget: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        reset();
        // Auto hide success screen after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      infos: [
        { value: "+92 333-1116842", action: "tel:+923331116842" },
        { value: "+92 332-5394285", action: "tel:+923325394285" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      infos: [
        { value: "marketing@clickmasters.pk", subtext: "We respond within 24 hours", action: "mailto:marketing@clickmasters.pk" },
        { value: "info@clickmasters.pk", subtext: "Support team", action: "mailto:info@clickmasters.pk" },
      ],
    },
    { icon: Clock, title: "Hours", infos: [{ value: "Monday - Saturday", subtext: "9:00 AM - 6:00 PM" }] },
    { icon: Building, title: "Support", infos: [{ value: "24/7 Technical Support" }] },
  ];

  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.fullAddress)}`;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <style>{animationStyles}</style>
      <Navbar />

      <HeroSection
        title="Contact Us"
        subtitle="Have questions about our real estate POS software? We're here to help."
        primaryCtaText="Get a Demo"
        primaryCtaHref="#contact-form"
        backgroundImage="/images/hero-contact.jpg"
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="contact-card bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  {item.infos.map((info, idx) => (
                    info.action ? (
                      <a key={idx} href={info.action} className="block text-primary font-medium mb-1">
                        {info.value}
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </a>
                    ) : (
                      <div key={idx} className="mb-1">
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    )
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form & Location */}
      <section id="contact-form" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-section grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {showSuccess ? (
                // Success Screen
                <div className="success-screen flex flex-col items-center justify-center text-center py-8 md:py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-4 max-w-sm">
                    Thank you for contacting us. We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-3 mb-6">
                    <p className="text-sm text-primary">
                      A confirmation email has been sent to your inbox.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2.5 border rounded-xl bg-card focus:outline-none focus:ring-2 transition ${
                          errors.name
                            ? "border-destructive focus:ring-destructive focus:border-destructive"
                            : "border-border focus:ring-primary focus:border-primary"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2.5 border rounded-xl bg-card focus:outline-none focus:ring-2 transition ${
                          errors.email
                            ? "border-destructive focus:ring-destructive focus:border-destructive"
                            : "border-border focus:ring-primary focus:border-primary"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="+92 333-1116842"
                      />
                    </div>

                    <div>
                      <label htmlFor="services" className="block text-sm font-medium mb-2">
                        Interested In
                      </label>
                      <select
                        {...register("services")}
                        id="services"
                        className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                      >
                        <option value="">Select an option...</option>
                        <option value="demo">Request a demo</option>
                        <option value="pricing">Pricing inquiry</option>
                        <option value="support">Technical support</option>
                        <option value="partnership">Partnership opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2.5 border rounded-xl bg-card focus:outline-none focus:ring-2 transition resize-none ${
                        errors.message
                          ? "border-destructive focus:ring-destructive focus:border-destructive"
                          : "border-border focus:ring-primary focus:border-primary"
                      }`}
                      placeholder="Tell us about your real estate agency and what you're looking for..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || !isDirty || isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="p-4 border-b border-border bg-card/50">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Find Us Here
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {LOCATION.address}
                  </p>
                </div>
                <div className="h-[320px] w-full">
                  <iframe
                    title="ClickMasters Office Location"
                    src={FALLBACK_MAP_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4 border-t border-border bg-card/30">
                  <a
                    href={getDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center">
                <p className="text-sm text-muted-foreground">
                  🚀 <span className="font-medium text-primary">Need urgent help?</span> Our support team is available 24/7 for POS technical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}