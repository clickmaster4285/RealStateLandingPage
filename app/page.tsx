import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import PropertyCategories from '@/components/property-categories';
import PropertyCard from '@/components/property-card';
import { properties } from '@/lib/property-data';

export default function Home() {
  // Get featured properties (first 3 from each type)
  const buyProperties = properties.filter((p) => p.type === 'buy').slice(0, 3);
  const rentProperties = properties.filter((p) => p.type === 'rent').slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Find Your Perfect Property"
        subtitle="Explore thousands of homes available for buy, rent, or sale. Your dream property awaits."
        backgroundImage="/images/hero-home.jpg"
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

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12k+</div>
              <div className="text-lg opacity-90">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
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
              Contact Us Today
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium"
            >
              Learn About Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
