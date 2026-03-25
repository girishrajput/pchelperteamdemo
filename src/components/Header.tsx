"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu on window resize to prevent layout ghosts
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Download', href: '/download' },
    { name: 'FT Portal', href: 'https://www.texource.com/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto h-20">

        {/* Logo - Ensure /public/images/pc-helper-logo.png exists */}
        <Link href="/" className="relative">
          <Image
            src="/images/pc-helper-logo.png"
            className="w-full h-auto"
            width={140}
            height={50}
            style={{ width: '190px', height: 'auto' }}
            alt="Logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-black transition-all font-bold"
              >
                Book Free Consultation
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 z-50 focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 top-0 bg-white z-40 flex flex-col transition-transform duration-300 ease-in-out md:hidden
          ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col p-8 pt-24 h-full">
          <ul className="flex flex-col gap-6 font-bold text-2xl text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-4">
                <Link href={link.href} onClick={() => setIsMobileOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block bg-primary text-white text-center py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                Book Free Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;