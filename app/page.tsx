'use client';

import { useState } from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import PropertyCategories from '@/components/property-categories';
import PropertyCard from '@/components/property-card';
import SolutionCard from '@/components/solution-card';
import ProblemCard from '@/components/problem-card';
import PricingCard from '@/components/pricingCard';
import { properties } from '@/lib/property-data';
import BlogSection from '@/components/blog-section';
import TestimonialsSection from '@/components/testimonials-section';
import { blogPosts, testimonials } from '@/lib/content-data';
import CaseStudiesSection from '@/components/case-studies-section';
import { caseStudies } from '@/lib/case-studies-data';


import { ArrowRight, FileQuestion, Search, Users } from 'lucide-react';

export default function Home() {
  // Get featured properties (first 3 from each type)
  const buyProperties = properties.filter((p) => p.type === 'buy').slice(0, 3);
  const rentProperties = properties.filter((p) => p.type === 'rent').slice(0, 3);

  const [showAllBlogs, setShowAllBlogs] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
     {/* Hero Section with Slider */}
<HeroSection
     title={
          <>
            All-in-One Real Estate Management System to Manage Properties,{" "}
            <span className="text-primary">Leads & Bookings</span>
          </>
        }
  subtitle="Built for Agencies, Developers & Property Managers – Launch, Scale & Automate Your Real Estate Operations"
  backgroundImages={[
    '/images/hero-home.jpg',
    '/images/hero-slide-2.jpg',
    '/images/hero-slide-3.jpg',
    '/images/hero-slide-4.jpg'
  ]}
  showSearchBar={false}
  primaryCtaText="Browse Properties"
  primaryCtaHref="/buy"
  secondaryCtaText="Get Started"
  secondaryCtaHref="/services"
/>

      
    


      {/* How We Can Help Section */}
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .help-card {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }

          .help-card:nth-child(1) { animation-delay: 0.2s; }
          .help-card:nth-child(2) { animation-delay: 0.4s; }
          .help-card:nth-child(3) { animation-delay: 0.6s; }
        `}
      </style>
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you&apos;re buying, renting, or selling, we have the expertise and resources to make your real estate journey smooth and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buying */}
            <div className="help-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                <img
                  src="/images/service-buying.jpg"
                  alt="Buying a home"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Finding Your Dream Home</h3>
              <p className="text-muted-foreground mb-4">
                Our expert agents help you navigate the buying process with personalized guidance and access to exclusive listings.
              </p>
              <a href="/buy" className="text-primary font-medium hover:underline">
                Browse Homes →
              </a>
            </div>

            {/* Renting */}
            <div className="help-card group cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                <img
                  src="/images/service-rental.jpg"
                  alt="Rental properties"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Rental Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Discover properties that match your lifestyle and budget. We handle all the details of your rental search.
              </p>
              <a href="/rent" className="text-primary font-medium hover:underline">
                Explore Rentals →
              </a>
            </div>

            {/* Selling */}
            <div className="help-card group cursor-pointer" style={{ animationDelay: '0.6s' }}>
              <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                <img
                  src="/images/service-selling.jpg"
                  alt="Selling a home"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Maximize Your Sale</h3>
              <p className="text-muted-foreground mb-4">
                Get top market value for your property with our comprehensive selling strategies and professional marketing.
              </p>
              <a href="/sell" className="text-primary font-medium hover:underline">
                Sell Your Home →
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Featured Buy Properties */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Homes for Sale</h2>
            <p className="text-lg text-muted-foreground">
              Discover our hand-picked selection of premium properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {buyProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                type={property.type}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/buy"
              className="inline-flex px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>

      {/* Featured Rental Properties */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Rentals</h2>
            <p className="text-lg text-muted-foreground">
              Find your next rental home from our curated collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {rentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                type={property.type}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/rent"
              className="inline-flex px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium"
            >
              View All Rentals
            </a>
          </div>
        </div>
      </section>

      

        {/* Problem → Solution Section */}
<section className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-primary/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
  
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        From Frustration to{' '}
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Simplification
        </span>
      </h2>
     
    </div>

    {/* Problems Grid */}
    <div className="mb-16">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold text-destructive/80 uppercase tracking-wider">
          Common Challenges
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          What Makes Property Search{' '}
          <span className="text-destructive">Frustrating</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProblemCard
          icon={<Search className="w-7 h-7" />}
          title="Overwhelmed by Endless Listings"
                description="Hundreds of properties with no smart filtering. You spend hours scrolling through options that don't match your actual needs."
                 index={0}
        />
        <ProblemCard
          icon={<FileQuestion className="w-7 h-7" />}
          title="Can't Trust Outdated Information"
                description="Stale photos, vague descriptions, and missing details lead to wasted time visiting properties that don't match expectations."
                 index={1}
        />
        <ProblemCard
          icon={<Users className="w-7 h-7" />}
          title="Complicated Process with Middlemen"
                description="Too many intermediaries, confusing paperwork, and lack of transparency make buying or renting unnecessarily stressful."
                  index={2}
        />
      </div>
    </div>

    {/* Arrow Divider */}
    <div className="flex justify-center my-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-primary/50 to-transparent hidden md:block"></div>
        <div className="absolute top-1/2 right-full w-24 h-px bg-gradient-to-l from-primary/50 to-transparent hidden md:block"></div>
      </div>
    </div>

    {/* Solutions Grid */}
    <div className="mt-16">
      <div className="text-center mb-10">
        <span className="text-sm font-semibold text-primary/80 uppercase tracking-wider">
          Our Solutions
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          How We{' '}
          <span className="text-primary">Fix These Problems</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SolutionCard
          icon={<Search className="w-7 h-7" />}
          title="AI-Powered Smart Search"
          description="Advanced filters, personalized recommendations, and intelligent matching algorithms find your perfect property faster."
        />
        <SolutionCard
          icon={<FileQuestion className="w-7 h-7" />}
          title="Verified Listings with Virtual Tours"
          description="Every property is verified with 360° tours, live video walkthroughs, and real-time updates you can trust."
        />
        <SolutionCard
          icon={<Users className="w-7 h-7" />}
          title="End-to-End Seamless Platform"
          description="Browse, view, negotiate, and transact all in one place. Direct communication with owners, no hidden fees."
        />
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <a
        href="/buy"
        className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium group"
      >
        Find Your Dream Property
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
      </section>
      


      {/* Stats Section */}
    
<section className="pb-16 pt-16 md:pb-24 md:pt:24 bg-primary-foreground text-primary">
  <label className="text-3xl md:text-4xl font-bold mb-12 block text-center">
  Trusted by Agencies & Developers
</label>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
        <div className="text-lg opacity-90">Properties Listed</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
        <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            
            <div>
        <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
        <div className="text-lg opacity-90">faster deal closing</div>
            </div>
            

      <div>
        <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
        <div className="text-lg opacity-90">Expert Agents</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
        <div className="text-lg opacity-90">Years in Business</div>
      </div>
    </div>
  </div>
</section>

      

            {/* Pricing Section */}
      {/* <section id="pricings" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
           
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent{' '}
              <span className="text-primary">
                Pricing
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your real estate needs. No hidden fees, cancel anytime.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <PricingCard
              name="Basic"
              price="$49"
              period="/month"
              description="Perfect for individual agents just starting out"
              features={[
                "Up to 50 property listings",
                "Basic analytics dashboard",
                "Email support",
                "Standard listing visibility",
                "Basic lead management",
                "Mobile app access"
              ]}
              buttonText="Contact Sales"
              buttonLink="/contact"
            />

            
            <PricingCard
              name="Professional"
              price="$99"
              period="/month"
              description="For growing agencies and professional agents"
              features={[
                "Up to 500 property listings",
                "Advanced analytics & reports",
                "Priority email & chat support",
                "Featured listing visibility",
                "Advanced lead management",
                "CRM integration",
                "Virtual tour support",
                "Team collaboration tools"
              ]}
              isPopular={true}
              buttonText="Contact Sales"
              buttonLink="/contact"
            />

           
            <PricingCard
              name="Enterprise"
              price="Custom"
              period=""
              description="For large agencies and property developers"
              features={[
                "Unlimited property listings",
                "Custom analytics & reporting",
                "24/7 priority phone support",
                "Premium listing visibility",
                "Enterprise lead management",
                "API access",
                "White-label solution",
                "Dedicated account manager",
                "Custom development options"
              ]}
              buttonText="Contact Sales"
              buttonLink="/contact"
            />
          </div>

         
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section> */}

      
      <section id="blogs">
      <BlogSection 
  posts={showAllBlogs ? blogPosts : blogPosts.slice(0, 3)}
  title="Latest Insights & Articles"
  subtitle="Stay updated with the latest real estate trends, tips, and news"
  showViewAll={true}
  onViewAllToggle={() => setShowAllBlogs(!showAllBlogs)}
/></section>

      
      <section id="case-study">
<CaseStudiesSection 
  caseStudies={caseStudies}
  title="Success Stories"
  subtitle="See how we've helped our clients achieve their real estate goals"
  showViewAll={true}
  initialDisplayCount={2}
      />
      </section>


{/* Testimonials Section */}
      <section id="testimonials">
      <TestimonialsSection 
  testimonials={testimonials}
  title="What Our Clients Say"
  subtitle="Don't just take our word for it - hear from our satisfied clients"
  /></section>

      
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our expert team help you find, rent, or sell your next property with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
            >
            View Live Demo
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium"
            >
             Get This System
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
