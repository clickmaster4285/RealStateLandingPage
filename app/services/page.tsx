import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { CheckCircle, FileText, Shield, Users, TrendingUp, Home } from 'lucide-react';

const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .service-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .service-card:nth-child(1) { animation-delay: 0.1s; }
  .service-card:nth-child(2) { animation-delay: 0.2s; }
  .service-card:nth-child(3) { animation-delay: 0.3s; }
  .service-card:nth-child(4) { animation-delay: 0.4s; }
  .service-card:nth-child(5) { animation-delay: 0.5s; }
  .service-card:nth-child(6) { animation-delay: 0.6s; }

  .why-choose-item {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .why-choose-item:nth-child(1) { animation-delay: 0.1s; }
  .why-choose-item:nth-child(2) { animation-delay: 0.2s; }
  .why-choose-item:nth-child(3) { animation-delay: 0.3s; }
  .why-choose-item:nth-child(4) { animation-delay: 0.4s; }
  .why-choose-item:nth-child(5) { animation-delay: 0.5s; }
`;

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Property Management',
      description: 'Professional management of your rental properties with tenant screening, maintenance coordination, rent collection, and comprehensive financial reporting. We handle all day-to-day operations so you can focus on growth.',
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Expert handling of all property-related legal documents and compliance requirements. Our team ensures all contracts, deeds, and documentation meet state and federal regulations.',
    },
    {
      icon: Shield,
      title: 'Title & Insurance',
      description: 'Comprehensive title insurance and protection for your real estate investments. We verify property ownership and protect against any title defects or claims.',
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: 'Work with our experienced team of professional real estate agents and consultants. Each team member brings decades of industry experience and local market knowledge.',
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Detailed market reports and analysis to help you make informed decisions. Get comprehensive data on pricing trends, neighborhood insights, and investment opportunities.',
    },
    {
      icon: Home,
      title: 'Home Staging',
      description: 'Professional staging services to showcase your property in the best light. We use modern design principles and strategic furniture placement to maximize buyer appeal.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <style>{animationStyles}</style>
      <Navbar />

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive real estate solutions tailored to your needs. From buying to selling, we&apos;ve got you covered."
        backgroundImage="/images/hero-services.jpg"
        primaryCtaText="Get Started"
        primaryCtaHref="/contact"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our comprehensive suite of real estate services is designed to simplify every aspect of your property journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="service-card bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 hover:border-primary/50 cursor-pointer">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - FIXED LEFT ALIGNMENT */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Removed mx-auto and max-w-3xl to allow full left alignment */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="why-choose-item flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Expertise & Experience</h3>
                <p className="text-muted-foreground">
                  With 25 years in the real estate industry, our team brings unmatched expertise and proven track record of successful transactions across diverse markets.
                </p>
              </div>
            </div>

            <div className="why-choose-item flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Every client is unique. We tailor our services to meet your specific goals and timeline, providing custom solutions for your real estate needs.
                </p>
              </div>
            </div>

            <div className="why-choose-item flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Market Knowledge</h3>
                <p className="text-muted-foreground">
                  Our agents stay updated on market trends, prices, and opportunities to serve you better. We provide competitive analysis and investment insights.
                </p>
              </div>
            </div>

            <div className="why-choose-item flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Technology Driven</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technology to provide you with the best tools, virtual tours, and real-time property information.
                </p>
              </div>
            </div>

            <div className="why-choose-item flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Our support team is available to answer your questions and provide guidance every step of the way. We&apos;re committed to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with our team today and let&apos;s help you achieve your real estate goals.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-opacity-90 transition font-medium"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}