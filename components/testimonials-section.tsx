// testimonials-section.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';
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

const sectionStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(99, 102, 241, 0.3);
    }
    50% {
      border-color: rgba(99, 102, 241, 0.8);
    }
  }

  .animate-fade-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-slide-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-slide-right {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .nav-button {
    transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
  }

  .nav-button:hover {
    transform: scale(1.1) rotate(5deg);
  }

  .dot-indicator {
    transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
  }

  .dot-indicator:hover {
    transform: scale(1.2);
  }
`;

export default function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied clients",
  autoSlideInterval = 5000,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  // Section scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

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
    <>
      <style>{sectionStyles}</style>
      <section 
        ref={sectionRef}
        className="py-16 md:py-24 bg-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animations */}
          <div className="text-center mb-12">
            {isSectionVisible && (
              <>
                <div className="animate-fade-up">
               
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {title}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  {subtitle}
                </p>
              </>
            )}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${currentIndex}`} 
                className="h-full transform transition-all duration-500"
              style={{
  animation: isSectionVisible
    ? `slideInLeft 0.6s ease-out forwards ${idx * 0.1 + 0.3}s`
    : 'none',
  opacity: 0,
}}
              >
                <TestimonialCard 
                  {...testimonial} 
                  index={currentSlide * itemsPerPage + idx}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {testimonials.length > itemsPerPage && (
            <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex justify-center items-center gap-4 mt-8">
                {/* Previous Arrow */}
                <button
                  onClick={prevSlide}
                  className="nav-button p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                {/* Pause/Play Button */}
                <button
                  onClick={toggleAutoPlay}
                  className="nav-button p-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>

                {/* Next Arrow */}
                <button
                  onClick={nextSlide}
                  className="nav-button p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`dot-indicator h-2 rounded-full transition-all duration-500 ${
                      currentSlide === idx
                        ? 'w-10 bg-primary'
                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center mt-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Slide {currentSlide + 1} of {totalSlides}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}