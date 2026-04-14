"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Star } from 'lucide-react';

const PCHelperLanding = () => {
  // State to handle hydration correctly
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen font-sans pt-16 pb-16">
      {/* Load Elfsight Script once globally for this component */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
      />

      {/* --- Why PCHelper Section --- */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Why PCHelperTeam?</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Over the years we have helped many organisations and this gives us the confidence to reach higher.
          This motivates us to continue looking for new challenges in order to improve as professionals
          and as a service company.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">10k+</span>
            <p className="mt-2 font-semibold">Projects and Problems Solved</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">5 Min</span>
            <p className="mt-2 font-semibold">Average Response Time</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">5-Star</span>
            <p className="mt-2 font-semibold">Excellent Reviews Across Web</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">25+ Years</span>
            <p className="mt-2 font-semibold">Supporting Home & Businesses</p>
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Google Reviews */}
        <div className="p-4 md:p-0 md:flex items-center">
          <div className="w-full md:w-1/4">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">EXCELLENT</h3>
              <div className="flex justify-center lg:justify-start gap-1 text-gray-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#fbbf24" className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Based on <span className="underline font-bold text-gray-900">109 reviews</span>
              </p>
              <div className="mt-2 text-2xl font-bold text-gray-400">
                <Link href="https://share.google/t8GcZpBTaoH5FJpQX" target="_blank" rel="noopener noreferrer">
                  <img src="/images/google.svg" width="130" height="auto" alt="Google" className='mx-auto md:mx-0' />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="google-review-section min-h-[200px]">
              {isMounted && (
                <div 
                  className="elfsight-app-b85d2ae7-f4a7-4348-9fad-68467d3cd45b" 
                  data-elfsight-app-lazy 
                />
              )}
            </div>
          </div>
        </div>

        {/* Yelp Reviews */}
        <div className="p-4 md:p-0 md:flex items-top gap-4">
          <div className="w-full md:w-1/4">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">EXCELLENT</h3>
              <div className="flex justify-center lg:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#ff0000" className="w-5 h-5 text-red-600" />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Based on <span className="underline font-bold text-gray-900">47 reviews</span>
              </p>
              <div className="mt-2 text-red-600 font-black text-3xl italic">
                <Link href="https://www.yelp.com/biz/pchelperteam-los-angeles-3" target="_blank" rel="noopener noreferrer">
                  <img src="/images/yelp.svg" alt="Yelp" className='mx-auto md:mx-0 mb-5 md:mb-0' />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="google-review-section min-h-[200px]">
              {isMounted && (
                <div 
                  className="elfsight-app-bd90ae06-4f4e-49b0-9213-235e2f2ab9a5" 
                  data-elfsight-app-lazy 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCHelperLanding;