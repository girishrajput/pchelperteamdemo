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
        subtitle=""
      />

      <section className="bg-gray-light py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              
              <p className="text-lg text-gray-dark leading-relaxed">
               PCHelperTeam is a one-stop shop for all your computer equipment, software and technical support services at your convenient time and place. PCHelperTeam is a team of experienced and friendly IT professionals. We at PCHT love what we do and we are good at it. We will customize technology to fit your wishes and needs so you enjoy life without the hassle and clutter.
              </p>

              <p className="text-lg text-gray-dark leading-relaxed">
               PCHelperTeam is provider of technical support, equipment and all related services to local small businesses and residences in West Los Angeles and surrounding areas. We operate in Southern Malibu, Bel Air, Pacific Palisades, Santa Monica, Encino, West Los Angeles, Beverly Hills, West Hollywood, Down Town Los Angeles, Culver City, Mar Vista, Palms, Cheviot Hills, Beverly Glen, Venice, Marina Del Rey and areas close by. We have all the tools to get the job done and we will order and deliver any equipment and goods for your solution. We stand by our work and support when you need it. We strive for your full happiness and we try to go beyond what you expect. It is a promise. We have many satisfied clients who are with us for more than a decade and they keep referring us more business.
              </p>
              
            </div>

            {/* FIXED: Added h-[400px] and min-h to ensure Next.js Image fill works */}
            <div className="relative w-full h-[300px] md:h-[450px] min-h-[300px] overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
              <Image
                src="/about/man-working-computer.png" // Ensure this file exists in /public/about/
                alt="About PCHelperTeam"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;