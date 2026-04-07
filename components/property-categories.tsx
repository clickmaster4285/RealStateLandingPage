'use client';

import Link from 'next/link';
import { Home, DollarSign, Briefcase } from 'lucide-react';

export default function PropertyCategories() {
  const categories = [
    {
      icon: Home,
      title: 'Buy a Home',
      description: 'Find your perfect property from our extensive collection',
      href: '/buy',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Rent a Property',
      description: 'Browse affordable rental properties in your area',
      href: '/rent',
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Briefcase,
      title: 'Sell Your Property',
      description: 'List your property and connect with buyers',
      href: '/sell',
      color: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Helpss?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re looking to buy, rent, or sell, we&apos;ve got you covered with expert solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.href} href={category.href}>
                <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  {/* Colored Header */}
                  <div className={`bg-gradient-to-br ${category.color} h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className={`w-16 h-16 ${category.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
