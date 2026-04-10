'use client';

import Link from 'next/link';
import { Search, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundImages?: string[]; // Array of images for slider
  showSearchBar?: boolean;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = '/images/hero-home.webp',
  backgroundImages,
  showSearchBar = false,
  primaryCtaText = 'Explore',
  primaryCtaHref = '/buy',
  secondaryCtaText = 'Get This System',
  secondaryCtaHref = '/contact',
}: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let images = backgroundImages || (backgroundImage ? [backgroundImage] : ['/images/hero-home.webp']);
    // Only auto-slide if there are multiple images
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImage, backgroundImages]);

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

        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes fadeInSlow {
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

        .slider-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 1s ease-in-out;
        }

        .slider-image-active {
          opacity: 1;
          animation: zoomIn 8s ease-out;
        }

        .slider-image-inactive {
          opacity: 0;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%);
        }

        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot-active {
          background: white;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
      
      <div className="relative py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Slider */}
      <div className="absolute inset-0">
  {(() => {
    let images = backgroundImages || [backgroundImage];

    const currentImage = images[currentImageIndex];
    const nextImage = images[(currentImageIndex + 1) % images.length];

    return (
      <>
        {/* Current Image (ONLY ONE RENDERED) */}
        <Image
          key={currentImage}
          src={currentImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-opacity duration-1000"
        />

        {/* Preload NEXT image (hidden but optimized) */}
        {images.length > 1 && (
          <link rel="preload" as="image" href={nextImage} />
        )}
      </>
    );
  })()}

  <div className="image-overlay" />
</div>

        {/* Slider Dots (only show if multiple images) */}
{(() => {
            let images = backgroundImages || (backgroundImage ? [backgroundImage] : ['/images/hero-home.webp']);
            return images.length > 1 && (
              <div className="slider-dots">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`slider-dot ${index === currentImageIndex ? 'slider-dot-active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            );
          })()}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-8">
            <div className="hero-badge flex items-center justify-center gap-2 mb-4">
              <Home className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Real Estate Solutions
              </span>
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