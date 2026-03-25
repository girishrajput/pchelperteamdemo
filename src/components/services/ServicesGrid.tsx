"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Network, Headset, Cloud, Settings, HardDrive, Layout } from 'lucide-react';

const SERVICE_DATA = [
  {
    title: "Network",
    desc: "As cloud services rely on networks, PCHelperTeam's IT network monitoring and control services are now essential for IT.",
    icon: Network,
  },
  {
    title: "Help Desk",
    desc: "Maximizing service effectiveness, fixing issues, and promoting ongoing service innovation are PCHelperTeam's round-the-clock support goals.",
    icon: Headset,
  },
  {
    title: "An All-Inclusive Set of Cloud Tools",
    desc: "Receive managed cloud solutions for quick and accurate problem identification and diagnosis with us.",
    icon: Cloud,
  },
  {
    title: "Co-Managed or Fully Managed Services",
    desc: "We will do as you ask! Entrust us with your IT management services, or let us collaborate with your IT experts.",
    icon: Settings,
  },
  {
    title: "Infrastructure",
    desc: "We ensures that your IT infrastructure is constantly optimized to deliver the dependable and highly accessible services that businesses require.",
    icon: HardDrive,
  },
  {
    title: "Applications",
    desc: "By supporting software and on-premise installations, We Provide Solutions ensures that programs are always optimized.",
    icon: Layout,
  }
];

export default function ServicesGrid() {
  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <AnimatePresence mode="popLayout">
        {SERVICE_DATA.map((item) => {
          const IconComponent = item.icon;

          return (
            <Link 
              key={item.title} 
              href="#"
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative h-full bg-white p-12 flex flex-col items-center text-center border border-gray-light hover:border-primary transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-primary/10" />

                {/* Icon */}
                <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-black text-black mb-4 leading-tight uppercase tracking-widest group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-dark font-medium leading-relaxed text-sm group-hover:text-black transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}