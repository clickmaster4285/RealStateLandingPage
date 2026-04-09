'use client';

import { useEffect, useRef } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import CaseStudyCard from './case-study-card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudy {
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
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  initialDisplayCount?: number;
}

export default function CaseStudiesSection({
  caseStudies,
  title = "Success Stories",
  subtitle = "See how we've helped our clients achieve their real estate goals",
  showViewAll = true,
  initialDisplayCount = 2,
}: CaseStudiesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const displayedStudies = caseStudies.slice(0, initialDisplayCount);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-background via-background to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
         
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {title}
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 mb-10">
          {displayedStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              {...study}
              index={idx}
            />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && caseStudies.length > initialDisplayCount && (
          <div className="text-center mt-12">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium group"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}