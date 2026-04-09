'use client';

import { CheckCircle2 } from 'lucide-react';

const cardAnimationStyles = `
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .solution-card {
    animation: slideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .solution-card:nth-child(1) { animation-delay: 0.4s; }
  .solution-card:nth-child(2) { animation-delay: 0.5s; }
  .solution-card:nth-child(3) { animation-delay: 0.6s; }
`;

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <>
      <style>{cardAnimationStyles}</style>
      <div className="solution-card group cursor-pointer">
        <div className="bg-card rounded-xl p-6 border-2 border-primary/20 hover:border-primary/60 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <div className="text-primary">{icon}</div>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed pl-7">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}