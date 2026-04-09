'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import PropertyFilter, { FilterState } from '@/components/property-filter';
import PropertyCard from '@/components/property-card';
import { getPropertiesByType, filterProperties } from '@/lib/property-data';

export default function RentPage() {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    minPrice: 0,
    maxPrice: Infinity,
    bedrooms: 0,
    bathrooms: 0,
  });

  const allRentProperties = getPropertiesByType('rent');
  const filteredProperties = filterProperties('rent', {
    searchTerm: filters.searchTerm,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    bedrooms: filters.bedrooms,
    bathrooms: filters.bathrooms,
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Find Your Perfect Rental"
        subtitle="Discover comfortable apartments and homes available for rent. Browse our listings today."
        backgroundImage="/images/hero-rent.webp"
        primaryCtaText="Explore More"
        primaryCtaHref="/rent"
      />

      <div className="flex-1 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilter onFilterChange={setFilters} type="rent" />

          <div>
            <h2 className="text-2xl font-bold mb-6">
              {filteredProperties.length > 0 ? `${filteredProperties.length} of ${allRentProperties.length} Properties Found` : 'No properties found'}
            </h2>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No properties match your filters. Try adjusting your search.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      searchTerm: '',
                      minPrice: 0,
                      maxPrice: 999999,
                      bedrooms: 0,
                      bathrooms: 0,
                    })
                  }
                  className="text-primary hover:underline font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
