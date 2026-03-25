import React from 'react';

import FAQItem from '@/components/FAQItem';


const faqData = [
  {
    id: 1,
    question: "Why do I need a professional website?",
    answer: "A professional website builds credibility, acts as a 24/7 sales tool, and ensures you own your digital presence instead of relying solely on social media algorithms."
  },
  {
    id: 2,
    question: "How much does website Development cost?",
    answer: "Pricing varies based on complexity. A basic landing page starts lower, while a full e-commerce solution involves more integration and testing."
  },
  {
    id: 3,
    question: "How long does it take?",
    answer: "Most standard business websites take 4–6 weeks from discovery to launch, depending on how quickly content and feedback are provided."
  }
];




export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Frequently Asked Questions <span className="text-primary">  FAQ&apos;s </span>
          </h2>
          <p className="text-gray-dark">Everything you need to know about our process.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}