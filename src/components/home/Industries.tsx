'use client';
import React from 'react';
import { 
  Calculator, 
  Home, 
  Headset, 
  Landmark, 
  Scale, 
  Building2, 
  ArrowRight, 
} from 'lucide-react';
import Link from 'next/link';

const industries = [
  { name: "Accounting Firms", icon: Calculator },
  { name: "Funds & Family Offices", icon: Home },
  { name: "Healthcare and Science", icon: Headset },
  { name: "Financial Institutions", icon: Landmark },
  { name: "Law Firms", icon: Scale },
  { name: "Real Estate", icon: Building2 },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl lg:text-3xl font-bold text-black leading-tight mb-6">
            Empowering Industries Through Technology, Innovation, and Expertise
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-10">
            Our expertise spans multiple sectors, providing smart solutions that drive growth and efficiency. 
            From startups to established businesses, we make an impact everywhere.
          </p>
          <Link href="/contact" className="group flex items-center gap-2 bg-primary hover:bg-black text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg w-48">
            Get a Quote 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Side: Interactive Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-6 border-[1.5px] border-gray-light rounded-2xl aspect-square transition-all duration-300 hover:bg-primary hover:border-primary cursor-pointer shadow-sm hover:shadow-xl"
            >
              {/* Icon - Changes from Blue to White on Hover */}
              <item.icon className="w-10 h-10 mb-4 text-primary transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
              
              <span className="text-center text-sm font-semibold text-gray-dark transition-colors duration-300 group-hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}