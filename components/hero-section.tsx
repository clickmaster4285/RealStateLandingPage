'use client';

import Link from 'next/link';
import { Search, Home } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showSearchBar?: boolean;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  showSearchBar = false,
  primaryCtaText = 'Explore',
  primaryCtaHref = '/buy',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '/about',
}: HeroSectionProps) {
  return (
    <>
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero-badge {
          animation: slideInDown 0.8s ease-out;
        }

        .hero-title {
          animation: slideInDown 0.8s ease-out 0.1s both;
        }

        .hero-subtitle {
          animation: slideInDown 0.8s ease-out 0.2s both;
        }

        .hero-cta {
          animation: slideInUp 0.8s ease-out 0.3s both;
        }

        .hero-image {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
      <div
      className="relative py-20 md:py-32 overflow-hidden"
      style={
        backgroundImage
          ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Gradient overlay for light backgrounds */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="hero-badge flex items-center justify-center gap-2 mb-4">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Real Estate Solutions</span>
          </div>
        <h1
  className="hero-title text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance"
  style={{
    textShadow: '0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
  }}
>
  {title}
</h1>
         <p
  className="hero-subtitle text-lg md:text-xl text-white max-w-3xl mx-auto text-balance"
  style={{
    textShadow: '0 0 8px rgba(0,0,0,0.7)'
  }}
>
  {subtitle}
</p>
        </div>

        {showSearchBar && (
          <div className="flex gap-2 max-w-2xl mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
              Search
            </button>
          </div>
        )}

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCtaHref}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium transform hover:scale-105 hover:shadow-lg"
          >
            {primaryCtaText}
          </Link>
       <Link
  href={secondaryCtaHref}
  className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/20 transition font-medium transform hover:scale-105"
  style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}
>
  {secondaryCtaText}
</Link>
        </div>
      </div>
    </div>
    </>
  );
}
