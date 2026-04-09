'use client';

import { Star, Quote, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonialAnimationStyles = `
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .testimonial-card {
    opacity: 0;
    height: 100%;
  }

  .testimonial-card.animate {
    animation: scaleIn 0.5s ease-out forwards;
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
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col relative">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="w-12 h-12 text-primary" />
          </div>

          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 shrink-0 ${
                  i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Content - Fixed height area */}
          <div className="flex-1 mb-6">
            <p className="text-muted-foreground leading-relaxed relative z-10 line-clamp-6">
              "{content}"
            </p>
          </div>

          {/* Author Info - Fixed at bottom */}
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h4 className="font-bold truncate">{name}</h4>
              <p className="text-sm text-muted-foreground truncate">
                {role}{role && company && ', '}{company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}