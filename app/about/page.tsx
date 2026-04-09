import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { Award, Users, Globe, Heart, Code, Shield, Zap, BarChart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'We write clean, scalable, and maintainable code that powers modern real estate operations.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your clients\' data and transactions are protected with enterprise-grade security standards.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our POS solutions to meet the changing demands of real estate businesses.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your growth is our mission. We partner with you to achieve measurable results.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="About Us"
        subtitle="We build powerful POS software that helps real estate agencies streamline sales, manage properties, and close deals faster."
        primaryCtaText="View Solutions"
        primaryCtaHref="/services"
          backgroundImage="/images/hero-about.webp"
      />

     
      {/* Our Story */}
<section className="py-16 md:py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Every great solution begins with a problem—and ours was clear. Real estate agencies were navigating a maze of outdated tools that slowed them down, created friction, and left opportunities on the table. We imagined a smarter, smoother way forward.
      </p>
      <p className="text-lg text-muted-foreground mb-6">
        Starting as a small circle of curious developers and real estate professionals, we were driven by one goal: to build software that works the way people actually do. One that feels intuitive, simplifies complex workflows, and lets teams focus on what really matters—connecting with clients and closing deals.
      </p>
      <p className="text-lg text-muted-foreground mb-6">
        Over the years, that vision grew into a global platform trusted by hundreds of agencies. From capturing leads in real time to tracking commissions effortlessly, every feature is shaped by the challenges our clients face every day.
      </p>
      <p className="text-lg text-muted-foreground">
        Today, we’re proud to be more than just a tool. We’re a partner in growth, helping agencies unlock their potential, streamline operations, and thrive in an ever-evolving market. Innovation is at our core, and our journey is far from over—we continue to evolve alongside those we serve, always pushing forward.
      </p>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <p className="text-muted-foreground">Years in Development</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Agencies Using Our POS</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
              <p className="text-muted-foreground">Transactions Processed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Real Estate POS?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 500+ agencies that trust our software to manage listings, track commissions, and close deals faster.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Request a Demo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}