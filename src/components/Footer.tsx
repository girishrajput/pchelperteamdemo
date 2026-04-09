import React from 'react';
import Link from 'next/link';
// Added Facebook, Twitter (for X), Instagram, and Linkedin
import Image from 'next/image';
import { Phone, Printer, MapPin, Send, Share2, Facebook, X, Instagram, Linkedin } from 'lucide-react';
import ContactSection from './home/ContactSection';

const SERVICES_LINKS = [
  { name: "Computer Repair / PC & Mac", href: "/services/computer-repair" },
  { name: "IT & Server Rooms", href: "/services/it-server-rooms" },
  { name: "Data Recovery & Password Retrieval", href: "/services/data-recovery" },
  { name: "Hardware & Software Upgrades", href: "/services/upgrades" },
  { name: "Mobile & Cellphone Support", href: "/services/mobile-support" },
  { name: "Refurbished & Used Equipment", href: "/shop/refurbished" },
  { name: "Cabling Wiring & Dressing", href: "/services/cabling" },
  { name: "Cloud Access", href: "/services/cloud" },
  { name: "Charity & Reuse", href: "/charity" },
  { name: "Formatting Data Import Export", href: "/services/data-management" },
];

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Download", href: "/download" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

// 1. Updated Social Links with Lucide Components
const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100081790486686#", icon: <Facebook size={18} /> },
  { name: "X", href: "https://x.com/SoroushSabzi", icon: <X size={18} /> }, // Lucide uses Twitter for X
  { name: "Instagram", href: "https://www.instagram.com/soroushsabzi/", icon: <Instagram size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/soroush-sabzi-0944a08/", icon: <Linkedin size={18} /> },
  { name: "Tumblr", href: "https://www.trustpilot.com/", icon: <span className="text-lg italic font-serif">t</span> },
];

const Footer = () => {
  return (
    <>
      <ContactSection />
      <footer className="bg-black text-gray-light py-16 px-6 border-t border-white/5 font-sans">
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
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin size={16} className="mt-1 text-primary" />
                <span className="leading-tight">
                  2370 Westwood Blvd Ste F<br />
                  Los Angeles, CA 90064
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/contact"
                className="bg-primary text-white text-center font-bold py-3 px-6 rounded text-sm uppercase tracking-wide hover:bg-black transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send a Message
              </Link>
              <button className="border border-white/10 text-white text-center font-bold py-3 px-6 rounded text-sm uppercase tracking-wide hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Share2 size={16} />
                Recommend Us
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-dark gap-4">
          {/* <p>Copyright © {new Date().getFullYear()} PCHelperTeam | Design by <Link href="https://www.texource.com/" target="_blank" className='text-zinc-400 hover:text-white transition-colors'>TeXource</Link></p> */}



          <p>Copyright © {new Date().getFullYear()} PCHelperTeam | Design by&nbsp;<span ><Link href="https://www.texource.com/" target="_blank" rel="noopener" className='text-white'>TeXource</Link>&nbsp;–&nbsp;<Link href="https://pchelperteam.com/" target="_blank" rel="noopener" className='text-white'>PCHelperTeam</Link>&nbsp;–&nbsp;<Link href="https://www.linkedin.com/in/soroush-sabzi/" target="_blank" rel="noopener" className='text-white'>Soroush Sabzi</Link></span></p>



          <p className="flex items-center gap-1">Designed with <span className="text-primary">❤</span> Girish.</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;