// components/services/Solutions.tsx
import React from 'react';
import Link from 'next/link';
import ServicesGrid from './ServicesGrid';

interface SolutionsProps {
  title?: string;
  buttonText?: string;
}

const Solutions = ({ title = "Solutions", buttonText = "Get Started" }: SolutionsProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div className="relative">
          <div className="w-12 h-1 bg-red-600 mb-4" />
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">{title}</h2>
        </div>
        <Link href="/about" className="bg-black hover:bg-red-600 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
          {buttonText}
        </Link>
      </div>
      <ServicesGrid />
    </div>
  );
};

export default Solutions;