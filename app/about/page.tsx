import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and interaction with our clients.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Honesty and transparency are the foundation of our business relationships.',
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'We are committed to serving and strengthening the communities we work in.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our passion for real estate drives us to deliver exceptional results.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="About RealEstate"
        subtitle="Leading the real estate industry with integrity, expertise, and innovation for over 25 years."
        primaryCtaText="Learn More"
        primaryCtaHref="/services"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 1999, RealEstate has grown from a small local agency to one of the region&apos;s most trusted and respected real estate firms. Our journey has been driven by a commitment to helping people find their perfect homes and achieve their real estate goals.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              What started as a vision to provide honest, transparent real estate services has evolved into a comprehensive platform that serves thousands of clients annually. Over the years, we&apos;ve built a reputation for excellence, innovation, and genuine care for our clients&apos; needs.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, with a team of 500+ dedicated professionals and access to thousands of listings, we continue to set the standard for real estate excellence in our region.
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
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12k+</div>
              <p className="text-muted-foreground">Properties Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Agents & Staff</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
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

      {/* Team Leadership */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                title: 'CEO & Founder',
                bio: 'With over 25 years of real estate experience, Sarah founded RealEstate with a vision of transforming the industry.',
              },
              {
                name: 'Michael Chen',
                title: 'Chief Operations Officer',
                bio: 'Michael brings 20 years of operational excellence and is responsible for our day-to-day operations.',
              },
              {
                name: 'Emily Rodriguez',
                title: 'Chief Technology Officer',
                bio: 'Emily leads our technology initiatives and ensures we stay at the forefront of innovation.',
              },
            ].map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you&apos;re looking to buy, rent, or sell, our team is ready to help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
