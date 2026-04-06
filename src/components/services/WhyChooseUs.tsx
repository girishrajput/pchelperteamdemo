// components/services/WhyChooseUs.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  heading: React.ReactNode;
  description: React.ReactNode;
  features: Feature[];
}

const WhyChooseUs = ({ heading, description, features }: WhyChooseUsProps) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="w-12 h-1 bg-red-600 mb-6" />
        <h1 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
          {heading}
        </h1>
        <div className="space-y-6 text-zinc-600 max-w-lg leading-relaxed font-medium">
          {description}
        </div>
      </div>

      <div className="space-y-10">
        <h2 className="text-4xl font-black text-black uppercase tracking-tight">Why Choose Us?</h2>
        {features.map((feature, index) => (
          <div key={index} className="flex gap-6 group">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border-2 border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <feature.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-black uppercase tracking-wide">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;