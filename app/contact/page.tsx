'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { Mail, Phone, MapPin, Clock, Send, Building, Navigation } from 'lucide-react';

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
`;

// Location configuration
const LOCATION = {
  name: "ClickMasters - Real Estate POS",
  address: "Paris Shopping Mall, 4th floor, PWD",
  fullAddress: "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
  lat: 33.6844,
  lng: 73.0479,
};

// Google Maps Embed URL - Replace with your actual Google Maps API key for production
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(LOCATION.fullAddress)}&zoom=16`;

// Fallback static embed URL (works without API key)
const FALLBACK_MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION.fullAddress)}&output=embed`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      infos: [
        { value: '+92 333-1116842', action: 'tel:+923331116842' },
        { value: '+92 332-5394285', action: 'tel:+923325394285' },
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      infos: [
        { value: 'marketing@clickmasters.pk', subtext: 'We respond within 24 hours', action: 'mailto:marketing@clickmasters.pk' },
        { value: 'info@clickmasters.pk', subtext: 'Support team', action: 'mailto:info@clickmasters.pk' },
      ],
    },
    { icon: Clock, title: 'Hours', infos: [{ value: 'Monday - Saturday', subtext: '9:00 AM - 6:00 PM' }] },
    { icon: Building, title: 'Support', infos: [{ value: '24/7 Technical Support' }] },
  ];

  // Get directions URL
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
            {contactInfo.map(item => {
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

      {/* Form & Location Side by Side */}
      <section id="contact-form" className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-section grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl">
                  <p className="text-green-800 dark:text-green-300">
                    ✓ Thank you for your message! We'll be in touch shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="+92 333-1116842"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    >
                      <option value="">Select a subject</option>
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
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Tell us about your real estate agency and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              {/* Map Card */}
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

              {/* Quick Support Note */}
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