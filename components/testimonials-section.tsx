'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import TestimonialCard from './testimonial-card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  autoSlideInterval?: number;
}

export default function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied clients",
  autoSlideInterval = 5000,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-swipe logic
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerPage;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - itemsPerPage;
      return prevIndex < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex;
    });
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex * itemsPerPage);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  const currentSlide = Math.floor(currentIndex / itemsPerPage);

  return (
    <section 
      className="py-16 md:py-24 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
       
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid with equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <div key={`${testimonial.id}-${currentIndex}`} className="h-full">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {testimonials.length > itemsPerPage && (
          <>
            <div className="flex justify-center items-center gap-3 mt-8">
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pause/Play Button */}
              <button
                onClick={toggleAutoPlay}
                className="p-2 rounded-full border border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-5 h-5 text-primary" />
                ) : (
                  <Play className="w-5 h-5 text-primary" />
                )}
              </button>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}