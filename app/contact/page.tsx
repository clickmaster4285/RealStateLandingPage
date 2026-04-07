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
      info: '+1 (555) 123-4567',
      subtext: 'Available Mon-Fri, 9AM-6PM',
      action: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@coderealty.com',
      subtext: 'We respond within 24 hours',
      action: 'mailto:info@coderealty.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      info: 'Monday - Friday',
      subtext: '9:00 AM - 6:00 PM EST',
    },
    {
      icon: Building,
      title: 'Support',
      info: '24/7 Technical Support',
      subtext: 'For urgent POS issues',
    },
  ];

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
              const Wrapper = item.action ? 'a' : 'div';
              return (
                <Wrapper
                  key={item.title}
                  href={item.action}
                  className="contact-card group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-primary font-medium mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subtext}</p>
                </Wrapper>
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
                      placeholder="+1 (555) 123-4567"
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
              {/* Office Location Card */}
              <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Our Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Software Drive, Suite 400<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Regional Office</h3>
                    <p className="text-muted-foreground">
                      456 Innovation Hub<br />
                      Austin, TX 73301<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg h-80 lg:h-[320px]">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative">
                  {/* Static map placeholder - replace with actual map embed */}
                  <div className="text-center p-6">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      📍 123 Software Drive, San Francisco, CA
                    </p>
                    <p className="text-sm text-muted-foreground">
                      View on Google Maps for directions
                    </p>
                    <a
                      href="https://maps.google.com/?q=123+Software+Drive+San+Francisco+CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  
                  {/* Uncomment to use actual Google Maps embed */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019174329449!2d-122.419415484681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7b3d8b8d%3A0x4b7b2b8b8b8b8b8!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
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

      {/* FAQ CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            Quick answers to common questions about our real estate POS software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="px-6 py-3 border border-border rounded-xl hover:bg-card transition font-medium"
            >
              View All FAQs
            </a>
            <a
              href="/demo"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition font-medium"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}