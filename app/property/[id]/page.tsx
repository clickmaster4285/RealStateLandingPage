'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PropertyCard from '@/components/property-card';
import { getPropertyById, getPropertiesByType } from '@/lib/property-data';
import { MapPin, Home, Ruler, Calendar, Garage, Phone, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;
  const property = getPropertyById(propertyId);

  if (!property) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-6">The property you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-primary hover:underline font-medium">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related properties
  const relatedProperties = getPropertiesByType(property.type)
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  const typeLabel = {
    buy: 'For Sale',
    rent: 'For Rent',
    sell: 'Selling',
  };

  const typeColor = {
    buy: 'bg-blue-100 text-blue-800',
    rent: 'bg-green-100 text-green-800',
    sell: 'bg-orange-100 text-orange-800',
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Back Button */}
        <div className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Listings
            </Link>
          </div>
        </div>

        {/* Hero Image and Title */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 mt-8">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
              <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold ${typeColor[property.type]}`}>
                {typeLabel[property.type]}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold mb-4">{property.title}</h1>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5" />
                  {property.location}
                </div>

                <div className="bg-card border border-border rounded-xl p-6 mb-8">
                  <h2 className="text-lg font-semibold mb-4">About This Property</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                        <p className="font-semibold">{property.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                        <p className="font-semibold">{property.bathrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Sq Feet</p>
                        <p className="font-semibold">{property.sqft.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Year Built</p>
                        <p className="font-semibold">{property.yearBuilt}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Garage className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Garage</p>
                        <p className="font-semibold">{property.garage} cars</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-4">Features</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                {/* Price Card */}
                <div className="bg-card border border-border rounded-xl p-6 mb-6 sticky top-24">
                  <p className="text-muted-foreground text-sm mb-2">Price</p>
                  <div className="text-4xl font-bold text-primary mb-6">
                    ${(property.price / 1000).toFixed(0)}K
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
                      Schedule Tour
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-medium">
                      Save Property
                    </button>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4">Contact Agent</h3>

                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full mb-3" />
                      <p className="font-semibold mb-1">John Smith</p>
                      <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href="tel:+15551234567" className="text-primary hover:underline text-sm">
                          +1 (555) 123-4567
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href="mailto:john@realestate.com" className="text-primary hover:underline text-sm">
                          john@realestate.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <section className="py-16 md:py-24 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProperties.map((relatedProperty) => (
                  <PropertyCard
                    key={relatedProperty.id}
                    id={relatedProperty.id}
                    image={relatedProperty.image}
                    title={relatedProperty.title}
                    location={relatedProperty.location}
                    price={relatedProperty.price}
                    bedrooms={relatedProperty.bedrooms}
                    bathrooms={relatedProperty.bathrooms}
                    type={relatedProperty.type}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
