'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  results: {
    label: string;
    value: string;
    icon: 'trending' | 'users' | 'clock' | 'dollar';
  }[];
  index?: number;
}

export default function CaseStudyCard({
  id,
  title,
  client,
  category,
  description,
  image,
  results,
  index = 0,
}: CaseStudyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'trending':
        return <TrendingUp className="w-4 h-4" />;
      case 'users':
        return <Users className="w-4 h-4" />;
      case 'clock':
        return <Clock className="w-4 h-4" />;
      case 'dollar':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // Card entrance animation
    tl.fromTo(cardRef.current,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.15,
        ease: "back.out(0.8)",
      }
    );

    // Image animation
    if (imageRef.current) {
      tl.fromTo(imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Content animation
    if (contentRef.current) {
      tl.fromTo(contentRef.current,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }

    return () => {
      if (cardRef.current && ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === cardRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="case-study-card group"
      style={{ opacity: 0 }}
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full flex flex-col md:flex-row">
        {/* Image Section */}
      <div ref={imageRef} className="relative md:w-2/5 overflow-hidden h-64 md:h-auto">
         <Image
  src={image}
  alt={title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-700"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="p-6 md:p-8 md:w-3/5 flex flex-col"
        >
          <div className="mb-2">
            <p className="text-sm text-muted-foreground">Client: {client}</p>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10"
              >
                <div className="text-primary">
                  {getIcon(result.icon)}
                </div>
                <div>
                  <div className="text-lg font-bold">{result.value}</div>
                  <div className="text-xs text-muted-foreground">{result.label}</div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
  );
}