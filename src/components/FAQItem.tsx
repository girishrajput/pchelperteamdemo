'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-light">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-light transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-black">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-dark transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-dark leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}