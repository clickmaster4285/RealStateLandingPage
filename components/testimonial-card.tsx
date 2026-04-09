// testimonial-card.tsx
'use client';

import { Star, Quote, User, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonialAnimationStyles = `
  @keyframes floatIn {
    0% {
      opacity: 0;
      transform: translateY(50px) rotateX(-10deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
    }
    50% {
      box-shadow: 0 0 20px 5px rgba(99, 102, 241, 0.3);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .testimonial-card {
    opacity: 0;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .testimonial-card.animate {
    animation: floatIn 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  }

  .testimonial-card:hover .glow-effect {
    animation: glowPulse 1.5s ease-in-out infinite;
  }

  .testimonial-card:hover .shimmer-overlay {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  .rating-star {
    transition: all 0.2s ease;
  }

  .rating-star:hover {
    transform: scale(1.2) rotate(12deg);
  }
`;

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  index = 0,
}: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <>
      <style>{testimonialAnimationStyles}</style>
      <div
        ref={cardRef}
        className={`testimonial-card ${isVisible ? 'animate' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative group h-full">
          {/* Gradient Border Effect - White only */}
          <div className="absolute -inset-0.5 bg-white/20 dark:bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
          
          {/* Main Card */}
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
            
            {/* Shimmer Overlay */}
            <div className="shimmer-overlay absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Decorative Elements - Primary only */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />

            {/* Quote Icon with Animation */}
            <div className={`absolute top-6 right-6 transition-all duration-500 ${isHovered ? 'opacity-30 scale-110 rotate-12' : 'opacity-10'}`}>
              <Quote className="w-12 h-12 text-primary" />
            </div>

        
         

            {/* Rating Stars with Hover Effect */}
            <div className="flex gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`rating-star w-5 h-5 shrink-0 transition-all duration-300 ${
                    i < rating 
                      ? 'fill-primary text-primary' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10 line-clamp-6 text-lg">
                "{content}"
              </p>
            </div>

            {/* Author Info with Hover Animation */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto group/author">
              <div className="relative">
                {avatar ? (
                  <div className="relative">
                    <img
                      src={avatar}
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/20 group-hover/author:ring-4 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover/author:opacity-20 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/author:scale-110 transition-transform duration-300">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold truncate text-gray-900 dark:text-white group-hover/author:text-primary transition-colors duration-300">
                  {name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {role}{role && company && ', '}{company}
                </p>
              </div>
            </div>

            {/* Bottom Gradient Bar - Primary only */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>
    </>
  );
}