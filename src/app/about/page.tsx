import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import InnerHeader from '@/components/InnerHeader';

const LOCATIONS = [
  "Southern Malibu", "Bel Air", "Pacific Palisades", "Santa Monica", "Encino",
  "West Los Angeles", "Beverly Hills", "West Hollywood", "Downtown LA",
  "Culver City", "Mar Vista", "Palms", "Cheviot Hills", "Beverly Glen", "Venice", "Marina Del Rey"
];

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <InnerHeader
        title="About Us"
        subtitle="Professional IT support tailored to your needs."
      />

      <section className="bg-gray-light py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Your One-Stop Shop for <br />
                <span className="text-primary">Total Tech Support.</span>
              </h1>
              <p className="text-lg text-gray-dark leading-relaxed">
                We are a team of experienced and friendly IT professionals dedicated to
                customizing technology to fit your wishes. We handle the hassle and
                clutter so you can enjoy life.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg active:scale-95"
              >
                Get Support Now
              </Link>
            </div>

            {/* FIXED: Added h-[400px] and min-h to ensure Next.js Image fill works */}
            <div className="relative w-full h-[300px] md:h-[450px] min-h-[300px] overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
              <Image
                src="/about/aboutus.jpg" // Ensure this file exists in /public/about/
                alt="About PCHelperTeam"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-light">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold mb-4">Where We Operate</h3>
                <p className="text-gray-dark mb-6">
                  Providing expert technical support and equipment to small businesses and residences across West Los Angeles.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-primary font-bold text-sm">✓ 10+ Years of Excellence</span>
                  <span className="text-primary font-bold text-sm">✓ Certified Pros</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {LOCATIONS.map((city) => (
                    <li key={city} className="flex items-center space-x-2 text-gray-dark">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{city}</span>
                    </li>
                  ))}
                  <li className="text-sm italic text-gray-light">...and more</li>
                </ul>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center">
            <p className="text-gray-light italic max-w-2xl mx-auto border-t pt-8">
              &ldquo;We strive for your full happiness and we try to go beyond what you expect. It is a promise.&rdquo;
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default About;