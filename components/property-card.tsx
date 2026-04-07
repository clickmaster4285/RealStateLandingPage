'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, DollarSign } from 'lucide-react';

const cardAnimationStyles = `
  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .property-card {
    animation: popIn 0.4s ease-out;
  }
`;

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: 'buy' | 'rent' | 'sell';
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  type,
}: PropertyCardProps) {
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
    <>
      <style>{cardAnimationStyles}</style>
      <Link href={`/property/${id}`}>
        <div className="property-card bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-primary/50 hover:scale-105">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${typeColor[type]}`}>
            {typeLabel[type]}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">{title}</h3>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            {location}
          </div>

          {/* Price */}
          <div className="flex items-center gap-1 mb-4">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-2xl font-bold text-primary">
              {(price / 1000).toFixed(0)}K
            </span>
            {type === 'rent' && <span className="text-muted-foreground text-sm">/mo</span>}
          </div>

          {/* Features */}
          <div className="flex gap-4 text-sm text-muted-foreground border-t border-border pt-3">
            <div className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{bathrooms} Bath</span>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
