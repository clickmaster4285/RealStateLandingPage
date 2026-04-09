'use client';

import { useEffect, useRef } from 'react';
import { AlertCircle, Search, Clock, FileQuestion, Users, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  animationType?: 'slide';
}

export default function ProblemCard({ icon, title, description, index = 0 }: ProblemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
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
        delay: index * 0.15,
        ease: "back.out(0.7)",
      }
    );

    // Animate icon with bounce effect
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

    // Animate title from left
    if (titleRef.current) {
      tl.fromTo(titleRef.current,
        {
          opacity: 0,
          x: -30,
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
      className="problem-card"
      style={{ opacity: 0 }}
    >
      <div className="card-inner bg-card rounded-xl p-6 border border-border h-full hover:border-destructive/30 transition-all duration-300">
        <div 
          ref={iconRef}
          className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5"
        >
          <div className="text-destructive">{icon}</div>
        </div>
        <h3 ref={titleRef} className="text-xl font-bold mb-3">{title}</h3>
        <p ref={descRef} className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
}