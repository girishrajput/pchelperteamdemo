"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Cable, 
  Cloud, 
  HeartHandshake, 
  Cpu, 
  Smartphone, 
  Settings2, 
  FileJson, 
  ShieldCheck, 
  MonitorSmartphone, 
  Network, 
  DatabaseZap, 
  Zap, 
  BarChart3, 
  Laptop, 
  Layers, 
  Recycle, 
  PhoneCall
} from "lucide-react";

// 1. Unified Data Object
export const SERVICE_DATA = {
  Infrastructure: [
    { 
      title: "Cabling Wiring & Dressing", 
      desc: "Ensure reliable connectivity with professional cabling and wiring according to policy.", 
      color: "primary", 
      icon: Cable 
    },
    { 
      title: "Hardware & Software Upgrades", 
      desc: "Enhance your business with expert hardware and software system upgrades.", 
      color: "black", 
      icon: Cpu 
    },
    { 
      title: "Refurbished & Used Equipment", 
      desc: "Value with high-quality refurbished and used equipment with in-house warranties.", 
      color: "primary", 
      icon: Settings2 
    },
    { 
      title: "Loaner Systems & Support", 
      desc: "Stay productive with our loaner systems and temporary hardware support.", 
      color: "black", 
      icon: Laptop 
    },
    { 
      title: "Recycling", 
      desc: "Support sustainability with our expert hardware recycling and disposal services.", 
      color: "primary", 
      icon: Recycle 
    },
    { 
      title: "PBX & VoIP Systems", 
      desc: "Optimize communication with expert PBX and VoIP system installations.", 
      color: "black", 
      icon: PhoneCall 
    }
  ],
  SecurityAndCloud: [
    { 
      title: "Cloud Access", 
      desc: "Enhance your business with secure cloud access anywhere, anytime from any device.", 
      color: "primary", 
      icon: Cloud 
    },
    { 
      title: "Data & Cyber Security", 
      desc: "Protect your business with top-notch data and cyber security across all platforms.", 
      color: "black", 
      icon: ShieldCheck 
    },
    { 
      title: "Formatting & Data Import", 
      desc: "Streamline your business with efficient data import, export, and formatting.", 
      color: "primary", 
      icon: FileJson 
    },
    { 
      title: "Data Flow & Access", 
      desc: "Optimize your operations with efficient data flow and structured access.", 
      color: "black", 
      icon: Network 
    },
    { 
      title: "Data Destruction & Medium Formatting", 
      desc: "Secure Your Information with Professional Data Destruction & Formatting through Department of Defense regulations and standards!", 
      color: "primary", 
      icon: DatabaseZap 
    },
    { 
      title: "Managed IT Solutions", 
      desc: "Streamline your operations with our comprehensive and managed IT solutions.", 
      color: "black", 
      icon: Layers 
    }
  ],
  SupportAndStrategy: [
    { 
      title: "IT Strategy & Planning", 
      desc: "Elevate your business with a strategic IT plan tailored to your goals.", 
      color: "primary", 
      icon: BarChart3 
    },
    { 
      title: "Emergency Response", 
      desc: "Get immediate help with our emergency and urgent IT response services.", 
      color: "black", 
      icon: Zap 
    },
    { 
      title: "Mobile & Cellphone Support", 
      desc: "Keep connected with expert mobile and cellphone support for your team.", 
      color: "primary", 
      icon: Smartphone 
    },
    { 
      title: "Device & Asset Management", 
      desc: "Track and manage your operations with effective device and asset management.", 
      color: "black", 
      icon: MonitorSmartphone 
    },
    { 
      title: "Charity & Reuse", 
      desc: "Make a difference with charity and reuse; we support local organizations.", 
      color: "primary", 
      icon: HeartHandshake 
    }
  ]
};

// const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD') // split accented characters
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-') // spaces → hyphen
    .replace(/[^\w-]+/g, '') // remove special chars
    .replace(/-+/g, '-') // collapse multiple hyphens
    .replace(/^-+|-+$/g, ''); // trim hyphens from start/end
};

export default function CreativeTabs() {
  // 2. Fixed variable reference from DATA to SERVICE_DATA
  const [activeTab, setActiveTab] = useState<keyof typeof SERVICE_DATA>('Infrastructure');
  const tabs = Object.keys(SERVICE_DATA) as Array<keyof typeof SERVICE_DATA>;

  return (
    <div className="min-h-screen bg-gray-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">Our Specialized Services</h2>
        <p className="text-gray-dark max-w-2xl mx-auto mb-12 text-center italic">
          Focused on results we seek to raise the efficiency and productivity for our clients.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-gray-light overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 md:px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-gray-dark hover:text-black'}`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-primary rounded-xl shadow-lg" 
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                  />
                )}
                <span className="relative z-10">
                    {/* Add spacing to camelCase keys for display */}
                    {tab.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {SERVICE_DATA[activeTab].map((item) => {
              // Extract the icon component correctly
              const IconComponent = item.icon;

              return (
                <Link 
                  key={item.title} 
                  href={`/services/${slugify(item.title)}`}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-full bg-white p-8 rounded-3xl border border-gray-light shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Background Decorative Circle */}
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full group-hover:scale-150 transition-transform duration-700 ${item.color === 'primary' ? 'bg-primary' : 'bg-black'} opacity-10`} />
                    
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform ${item.color === 'primary' ? 'bg-primary' : 'bg-black'}`}>
                      {typeof IconComponent === 'string' ? (
                        <span className="text-2xl font-black">{IconComponent}</span>
                      ) : (
                        <IconComponent size={28} strokeWidth={2.5} />
                      )}
                    </div>

                    <h3 className={`text-xl font-extrabold mb-3 transition-colors leading-tight ${item.color === 'primary' ? 'text-black group-hover:text-primary' : 'text-primary group-hover:text-black'}`}>
                      {item.title}
                    </h3>

                    <p className="text-gray-dark leading-relaxed text-sm mb-6">{item.desc}</p>

                    <div className={`flex items-center font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ${item.color === 'primary' ? 'text-black' : 'text-primary'}`}>
                      Learn More <span className="ml-2">→</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}