import React from 'react';
import Image from "next/image";
import InnerHeader from '@/components/InnerHeader';

const Download = () => {


  return (
    <>
      <InnerHeader
        title="Download"
        subtitle=""
      />

      <section className="relative overflow-hidden bg-gray-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">

            {/* Left Column: Content */}
            <div className="max-w-xl">
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                Get free, legal, recommended and supported software
                here, now!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-dark">
                Excited? You can download many of our recommended and supported full version applications. Everything we recommend satisfy the criteria of being fully licensed and legal, most are free of charge. Also, every application and software we recommend and work with is free of bundles, nagware, bloatware, malware, salesware, viruses, worms and trojans. We recommend applications that are complete, never expire and have full life time update and upgrade rights.
              </p>
            </div>

            {/* Right Column: Visual */}
            <div className="relative">
              <div className="relative h-[400px] w-full lg:h-[500px]">
                <div className="absolute inset-0 bg-red-100 rounded-3xl rotate-3 scale-95" />
                {/* Replace src with your actual image path */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
                  <Image
                    src="/about/aboutus.jpg"
                    alt="Professional working on laptop"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Download;