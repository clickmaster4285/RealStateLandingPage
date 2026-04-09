'use client';

import { AlertCircle, Search, Clock, FileQuestion, Users, ArrowRight } from 'lucide-react';

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

  .problem-card {
    animation: slideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .problem-card:nth-child(1) { animation-delay: 0.1s; }
  .problem-card:nth-child(2) { animation-delay: 0.2s; }
  .problem-card:nth-child(3) { animation-delay: 0.3s; }
`;

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <>
      <style>{cardAnimationStyles}</style>
      <div className="problem-card group cursor-pointer">
        <div className="bg-card rounded-xl p-6 border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-4px]">
          <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
            <div className="text-destructive">{icon}</div>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}