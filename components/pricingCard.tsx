'use client';

import { CheckCircle2 } from 'lucide-react';

const pricingAnimationStyles = `
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

  .pricing-card {
    animation: slideUp 0.5s ease-out forwards;
    opacity: 0;
  }

  .pricing-card:nth-child(1) { animation-delay: 0.2s; }
  .pricing-card:nth-child(2) { animation-delay: 0.35s; }
  .pricing-card:nth-child(3) { animation-delay: 0.5s; }
`;

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export default function PricingCard({
  name,
  price,
  period = '/month',
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  buttonLink = '/contact',
}: PricingCardProps) {
  return (
    <>
      <style>{pricingAnimationStyles}</style>
      <div className="pricing-card h-full">
        <div
          className={`relative bg-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:translate-y-[-8px] ${
            isPopular
              ? 'border-2 border-primary shadow-xl shadow-primary/10'
              : 'border border-border hover:border-primary/30 hover:shadow-lg'
          }`}
        >
          {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          {/* Plan Name */}
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm mb-6">{description}</p>

          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl md:text-5xl font-bold">{price}</span>
            <span className="text-muted-foreground">{period}</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6"></div>

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a
            href={buttonLink}
            className={`text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              isPopular
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'border-2 border-primary text-primary hover:bg-primary/10'
            }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
}