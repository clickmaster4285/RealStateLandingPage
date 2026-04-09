'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function SolutionCard({ icon, title, description, index = 0 }: SolutionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const checkIconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Create a timeline for this card
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the card container
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
        delay: index * 0.12,
        ease: "back.out(0.8)",
      }
    );

    // Animate icon with pulse effect
    if (iconRef.current) {
      tl.fromTo(iconRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );
    }

    // Animate check icon
    if (checkIconRef.current) {
      tl.fromTo(checkIconRef.current,
        {
          opacity: 0,
          x: -20,
          scale: 0,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.2"
      );
    }

    // Animate title from left
    if (titleRef.current) {
      tl.fromTo(titleRef.current,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    // Animate description from right
    if (descRef.current) {
      tl.fromTo(descRef.current,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
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
      className="solution-card"
      style={{ opacity: 0 }}
    >
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20 hover:border-primary/60 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]">
        <div 
          ref={iconRef}
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
        >
          <div className="text-primary">{icon}</div>
        </div>
        <div className="flex items-start gap-2 mb-3">
          <div ref={checkIconRef}>
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          </div>
          <h3 ref={titleRef} className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <p ref={descRef} className="text-muted-foreground leading-relaxed pl-7">
          {description}
        </p>
      </div>
    </div>
  );
}