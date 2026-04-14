"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Any Computer Problem",
    desc: "Free 24/7 Hotline",
    video: "/video/banner.mp4",
  },
  {
    id: 2,
    title: "Complete IT Solutions",
    desc: "Your Home or Office",
    video: "/video/banner.mp4",
  },
  {
    id: 3,
    title: "Anywhere in LA",
    desc: "Support NOW!",
    video: "/video/banner.mp4",
  },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="relative w-full h-screen bg-black" />;
  }

  return (
    <section className="relative w-full h-[calc(60vh-80px)] md:h-[calc(100vh-80px)] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-[1]"></div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-bold tracking-tight leading-[0.9] text-white/90 drop-shadow-2xl mb-6">
                    {slide.title}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-lg md:text-2xl mb-10 max-w-2xl text-gray-200 mx-auto font-medium"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#ff0000] hover:bg-white hover:text-black text-white px-12 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.4;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #ff0000 !important;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
          transition: width 0.3s ease;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>
    </section>
  );
}