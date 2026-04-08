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
  PhoneCall,
  BrainCircuit,
  Settings,
  Wrench,
  AlertTriangle,
  RefreshCw,
  Upload,
  Share2,
  ArrowLeftRight,
  KeyRound,
  Trash2,
  MonitorCog,
  Server,
  PackageCheck
} from "lucide-react";

// 1. Unified Data Object
export const SERVICE_DATA = {
  Infrastructure: [
    {
      title: "IT & Server Rooms",
      desc: "Your Operations with Professional IT & Server Room Management",
      color: "primary",
      icon: Server 
    },
    {
      title: "Cabling Wiring & Dressing",
      desc: "Ensure Reliable Connectivity with Professional Cabling & Wiring & Dressing according to Company Policy and Insurance and City Code",
      color: "black",
      icon: Cable 
    },
    {
      title: "PBX & VoIP Systems",
      desc: "Optimise Communication with Expert PBX & VoIP Systems",
      color: "primary",
      icon: PhoneCall 
    },
    {
      title: "Refurbished & Used Equipment",
      desc: "Value with High-Quality Refurbished & Used Equipment all with in-house warranties and guarantees",
      color: "black",
      icon: PackageCheck 
    },
    {
      title: "Recycling",
      desc: "Support Sustainability with Expert IT Recycling Services",
      color: "primary",
      icon: Recycle 
    },
    {
      title: "Charity & Reuse",
      desc: "Make a Difference with Charity & Reuse, we support many local and national charity organisations!",
      color: "black",
      icon: HeartHandshake 
    }
  ],
  SecurityAndCloud: [
    {
      title: "Data & Cyber Security",
      desc: "Protect Your Business with Top-Notch Data & Cyber Security across all mediums and devices and platforms!",
      color: "primary",
      icon: ShieldCheck 
    },
    {
      title: "Cloud Access",
      desc: "Enhance Your Business with Secure Cloud Access anywhere anytime from any type of device!",
      color: "black",
      icon: Cloud 
    },
    {
      title: "Data Recovery & Password Retrieval",
      desc: "Secure Your Information with Reliable Data Recovery & Retrieval",
      color: "primary",
      icon: KeyRound 
    },
    {
      title: "Data Destruction & Medium Formatting",
      desc: "Optimize your operations with efficient data flow and structured access.",
      color: "black",
      icon: Trash2 
    },
    {
      title: "Device & Asset Management",
      desc: "Secure Your Information with Professional Data Destruction & Formatting through Department of Defense regulations and standards!",
      color: "primary",
      icon: MonitorCog 
    }
  ],
  SupportAndStrategy: [
    {
      title: "IT Strategy & Planning",
      desc: "Elevate Your Business with a Strategic IT Plan",
      color: "primary",
      icon: BrainCircuit
    },
    {
      title: "Managed IT Solutions",
      desc: "Streamline Your Operations with Comprehensive Managed IT Solutions",
      color: "black",
      icon: Settings
    },
    {
      title: "Computer Repair / PC & Mac",
      desc: "Keep Your Business Running Smoothly with Multi-Layered Backup Systems & Redundancy Measures to allow users access your vital information even in disastrous situations.",
      color: "primary",
      icon: Wrench
    },
    {
      title: "Emergency & Urgent Response",
      desc: "Get Immediate Help with Our Emergency & Urgent Response Services.",
      color: "black",
      icon: AlertTriangle
    },
    {
      title: "Mobile & Cellphone Support",
      desc: "Keep Connected with Expert Mobile & Cellphone Support",
      color: "primary",
      icon: Smartphone
    }
    ,
    {
      title: "Loaner Systems & Temporary Support",
      desc: "Stay Productive with Our Loaner Systems & Temporary Support",
      color: "black",
      icon: RefreshCw
    }
    ,
    {
      title: "Hardware & Software Upgrades",
      desc: "Enhance Your Business with Expert Hardware & Software Upgrades.",
      color: "primary",
      icon: Upload
    }
    ,
    {
      title: "Data Flow & Access",
      desc: "Your Operations with Efficient Data Flow & Access.",
      color: "black",
      icon: Share2
    }
    ,
    {
      title: "Formatting Data Import Export",
      desc: "Streamline Your Business with Efficient Data Import & Export.",
      color: "primary",
      icon: ArrowLeftRight
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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