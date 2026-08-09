"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "./UI/TextReveal";

/* Cinematic Editorial Imagery */
const heroImages = [
  "/images/men_2.jpg",    // Very clear denim jacket/jeans
  "/images/women_2.jpg",  // Clear denim
  "/images/women_4.jpg",  // Stunning clear shot
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle images every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] flex flex-col justify-end items-center">
      
      {/* ── Cinematic Ken Burns Background Slider ── */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 0.85, scale: 1.05 }} // Brighter opacity so denim is clearly visible
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" } 
            }}
          >
            <img 
              src={heroImages[currentIndex]} 
              alt="Aura Denim Editorial" 
              className="w-full h-full object-cover object-center" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Gradient Overlay for Perfect Contrast ── */}
      {/* Reduced the dark gradient so the top 70% of the image is completely bright and visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent pointer-events-none z-10" />

      {/* ── Foreground Content ── */}
      <div className="relative z-20 w-full pb-12 md:pb-20 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="font-sans text-accent tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block font-medium">
            Jackets · Jeans · Shirts · Skirts · Dresses · Overalls
          </span>
        </motion.div>
        
        <TextReveal className="font-serif text-7xl md:text-9xl lg:text-[11rem] uppercase tracking-tighter text-white mb-6 leading-none">
          AURA DENIM
        </TextReveal>
        
        <motion.p 
          className="font-sans text-white/70 max-w-lg text-sm md:text-base font-light tracking-widest mb-12 mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Every denim wearable you can imagine — crafted with raw indigo and timeless elegance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <a href="#collections" className="w-full sm:w-auto px-12 py-4 bg-white text-black font-sans font-semibold tracking-[0.2em] uppercase text-[11px] md:text-xs hover:bg-gray-200 transition-all duration-500 text-center">
            Explore Collections
          </a>
          <a href="#shop" className="w-full sm:w-auto px-12 py-4 border border-white/20 text-white font-sans font-semibold tracking-[0.2em] uppercase text-[11px] md:text-xs hover:border-white transition-all duration-500 text-center">
            Shop All Denim
          </a>
        </motion.div>
      </div>
    </section>
  );
}


