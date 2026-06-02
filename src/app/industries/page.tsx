import React from 'react';
import { 
  Calculator, 
  Home, 
  Headset, 
  Landmark, 
  Scale, 
  Building2, 
  ArrowRight 
} from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';

const services = [
  {
    title: "Accounting Firms",
    description: "Optimize your accounting firm with professional managed IT services designed for precision.",
    icon: <Calculator className="w-10 h-10" />,
  },
  {
    title: "Funds & Family Offices",
    description: "Elevate your family office with modern managed IT services and secure data management.",
    icon: <Home className="w-10 h-10" />,
  },
  {
    title: "Healthcare and Science",
    description: "Revolutionize healthcare and science with expert managed IT solutions and compliance.",
    icon: <Headset className="w-10 h-10" />,
  },
  {
    title: "Financial Institutions",
    description: "Transform your financial institution with expert managed IT and robust security protocols.",
    icon: <Landmark className="w-10 h-10" />,
  },
  {
    title: "Law Firms",
    description: "Streamline your legal practice with expert IT solutions that prioritize confidentiality.",
    icon: <Scale className="w-10 h-10" />,
  },
  {
    title: "Real Estate",
    description: "Elevate your real estate business with comprehensive managed IT and cloud services.",
    icon: <Building2 className="w-10 h-10" />,
  }
];

const Industries = () => {
  return (
    <>
      <InnerHeader
        title="Industry"
        subtitle=""
      />

      <div className="bg-white text-black py-10 px-6 font-sans">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-gray-light rounded-full">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Tailored Solutions for <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-gray-dark text-lg max-w-2xl mx-auto leading-relaxed">
            We combine creativity with technical excellence to help you achieve better results and solidify your position in the global market.
          </p>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle Accent Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-white transition-colors"></div>
              </div>

              {/* Icon Circle */}
              <div className="w-20 h-20 bg-gray-light text-primary rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-3">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-dark mb-8 leading-relaxed">
                {service.description}
              </p>

              <button className="flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all duration-300 uppercase tracking-wider text-sm">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industries;