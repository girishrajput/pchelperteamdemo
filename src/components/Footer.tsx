"use client"; // This line must be at the very top

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Printer, 
  MapPin, 
  Send, 
  Share2, 
  Facebook, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import ContactSection from './home/ContactSection';
import RecommendModal from './RecommendModal';

// --- Configuration Constants ---
const SERVICES_LINKS = [
  { name: "Computer Repair / PC & Mac", href: "/services/computer-repair-pc-mac" },
  { name: "IT & Server Rooms", href: "/services/it-server-rooms" },
  { name: "Data Recovery & Password Retrieval", href: "/services/data-recovery-password-retrieval" },
  { name: "Hardware & Software Upgrades", href: "/services/hardware-software-upgrades" },
  { name: "Mobile & Cellphone Support", href: "/services/mobile-cellphone-support" },
  { name: "Refurbished & Used Equipment", href: "/services/refurbished-used-equipment" },
  { name: "Cabling Wiring & Dressing", href: "/services/cabling-wiring-dressing" },
  { name: "Cloud Access", href: "/services/cloud-access" },
  { name: "Charity & Reuse", href: "/services/charity-reuse" },
  { name: "Formatting Data Import Export", href: "/services/formatting-data-import-export" },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Download", href: "/download" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100081790486686#", icon: <Facebook size={18} /> },
  {
    name: "X", 
    href: "https://x.com/SoroushSabzi", 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.34-6.99L3.5 22H1l7.02-8.02L2 2h6.828l4.86 6.35L18.244 2z" />
      </svg>
    )
  },
  { name: "Instagram", href: "https://www.instagram.com/soroushsabzi/", icon: <Instagram size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/soroush-sabzi-0944a08/", icon: <Linkedin size={18} /> },
  {
    name: "Trustpilot", 
    href: "https://www.trustpilot.com/", 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14.4 24c-4.1 0-7.2-2.6-7.2-7.5V9H4V5.6c2.4-.9 3.6-3 3.9-5.6h3.3v5.2H16V9h-4.8v6.9c0 2.2 1.1 3.3 3.1 3.3.8 0 1.6-.2 2.2-.5v3.4c-.7.3-1.7.6-3.1.6z" />
      </svg>
    )
  },
];

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContactSection />
      <footer className="bg-black text-gray-light pt-10 pb-4 px-6 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-8">
            <div>
              <Link href="/">
                <Image
                  src="/images/footer-logo.png"
                  alt="Logo"
                  width={200}
                  height={82}
                  style={{ width: '190px', height: 'auto' }}
                  priority
                />
              </Link>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-dark flex items-center justify-center text-gray-light hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-2 text-[14px]">
              {SERVICES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-2 text-[14px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg mb-2">Get in Touch</h3>
            <div className="space-y-4 text-[14px]">
              <a href="tel:3103605060" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone size={16} className="text-primary" />
                <span>(310) 360-5060</span>
              </a>
              <div className="flex items-center gap-3">
                <Printer size={16} className="text-primary" />
                <span>(310) 360-5080</span>
              </div>
              <a
                href="https://maps.app.goo.gl/n4h8vwAPC2Eort6v6" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin size={16} className="mt-1 text-primary" />
                <span className="leading-tight">
                  2370 Westwood Blvd. Ste. F<br />
                   Los Angeles, CA 90064
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/contact"
                className="bg-primary text-white text-center font-bold py-3 px-6 rounded text-sm uppercase tracking-wide hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send a Message
              </Link>
              
              <button 
                onClick={() => setShowModal(true)} 
                className="border border-white/10 text-white text-center font-bold py-3 px-6 rounded text-sm uppercase tracking-wide hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <Share2 size={16} />
                Recommend Us
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-dark gap-4">
          <p>
            Copyright © {new Date().getFullYear()} PCHelperTeam | Design by{' '}
            <Link href="https://www.texource.com/" target="_blank" rel="noopener" className='text-white hover:underline'>TeXource</Link>
            {' – '}
            <Link href="https://pchelperteam.com/" target="_blank" rel="noopener" className='text-white hover:underline'>PCHelperTeam</Link>
            {' – '}
            <Link href="https://www.linkedin.com/in/soroush-sabzi/" target="_blank" rel="noopener" className='text-white hover:underline'>Soroush Sabzi</Link>
          </p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-primary">❤</span> Girish.
          </p>
        </div>
      </footer>

      <RecommendModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Footer;