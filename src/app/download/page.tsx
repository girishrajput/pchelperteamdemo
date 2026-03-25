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
              <h2 className="text-lg font-semibold leading-7 text-primary uppercase tracking-wide">
                Secure Downloads
              </h2>
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                Get free, legal, and supported software <span className="text-primary">here, now!</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-dark">
                Excited? You can download many of our recommended and supported full version applications.
                Everything we recommend satisfies the highest security and legal criteria.
              </p>

              {/* Feature List (Makes the long text scannable) */}
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-dark lg:max-w-none">
                {[
                  '100% Licensed & Legal',
                  'Free of nagware, bloatware & malware',
                  'Complete versions that never expire',
                  'Lifetime updates & upgrade rights'
                ].map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-semibold text-black">
                      <span className="absolute left-1 top-1 h-5 w-5 text-primary">✓</span>
                      {feature}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex items-center gap-x-6">
                <a href="#" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors">
                  Browse Applications
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
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