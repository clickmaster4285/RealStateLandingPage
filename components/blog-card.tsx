'use client';

import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const blogAnimationStyles = `
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

  .blog-card {
    opacity: 0;
  }

  .blog-card.animate {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  index?: number;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  index = 0,
}: BlogCardProps) {
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
      <style>{blogAnimationStyles}</style>
      <div
        ref={cardRef}
        className={`blog-card ${isVisible ? 'animate' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
     
          <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
            {/* Image Container */}
           <div className="relative overflow-hidden h-48">
  <Image
    src={image}
    alt={title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />

  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
      {category}
    </span>
  </div>
</div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                {excerpt}
              </p>

              {/* Author & Read More */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{author}</span>
                </div>
              
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
}