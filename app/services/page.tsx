import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { CheckCircle, FileText, Shield, Users, TrendingUp, Home, UsersRoundIcon, FileType2Icon, Calendar } from 'lucide-react';

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
      description: [
        'Add, edit, categorize properties',
        'Media gallery + pricing',
        'Status tracking (available/sold/rented)',
      ],
    },
      {
      icon: UsersRoundIcon,
      title: 'CRM & Leads',
      description: [
        'Capture leads automatically',
        'Track deals pipeline',
        'Assign to agents',
      ],
    },
     {
      icon: Calendar,
      title: 'Booking System',
      description: [
        'Schedule visits',
        'Calendar sync',
        'Automated confirmations',
      ],
    },
    {
      icon: FileText,
      title: 'Legal Documentation',
      description: [
        'Handle contracts, deeds, and agreements',
        'Ensure compliance with local regulations',
        'Streamline document management for properties',
      ],
    },
    {
      icon: Shield,
      title: 'Title & Insurance',
      description: [
        'Title verification and property ownership checks',
        'Protect against title defects or claims',
        'Comprehensive insurance solutions',
      ],
    },
    {
      icon: Users,
      title: 'Expert Agents',
      description: [
        'Work with experienced real estate professionals',
        'Local market knowledge and expertise',
        'Personalized guidance for every client',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: [
        'Detailed reports on pricing trends',
        'Neighborhood insights and investment opportunities',
        'Data-driven decision support',
      ],
    },
    {
      icon: Home,
      title: 'Home Staging',
      description: [
        'Professional property staging',
        'Maximize buyer appeal with modern design',
        'Furniture placement for optimal presentation',
      ],
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
                  <ul className="list-disc list-inside text-muted-foreground">
                    {service.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise & Experience',
                description: 'With 25 years in the real estate industry, our team brings unmatched expertise and proven track record of successful transactions across diverse markets.',
              },
              {
                title: 'Personalized Service',
                description: 'Every client is unique. We tailor our services to meet your specific goals and timeline, providing custom solutions for your real estate needs.',
              },
              {
                title: 'Market Knowledge',
                description: 'Our agents stay updated on market trends, prices, and opportunities to serve you better. We provide competitive analysis and investment insights.',
              },
              {
                title: 'Technology Driven',
                description: 'We leverage cutting-edge technology to provide you with the best tools, virtual tours, and real-time property information.',
              },
              {
                title: 'Dedicated Support',
                description: 'Our support team is available to answer your questions and provide guidance every step of the way. We&apos;re committed to your success.',
              },
            ].map((item, idx) => (
              <div key={idx} className="why-choose-item flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
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