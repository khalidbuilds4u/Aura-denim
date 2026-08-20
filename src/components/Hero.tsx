"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./UI/MagneticButton";

const CAROUSEL_ITEMS = [
  { id: 0, src: "/images/floating_jacket_transparent.png", alt: "Floating Denim Jacket" },
  { id: 1, src: "/images/denim_jeans_transparent.png", alt: "Barrel Leg Jeans" },
  { id: 2, src: "/images/denim_skirt_transparent.png", alt: "Denim Maxi Skirt" },
  { id: 3, src: "/images/denim_dress_transparent.png", alt: "Denim Maxi Dress" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Mouse position values for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for different layers based on mouse movement
  const jacketX = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const jacketY = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const normalizedX = (clientX / innerWidth) - 0.5;
      const normalizedY = (clientY / innerHeight) - 0.5;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#000000] flex flex-col justify-center items-center select-none"
    >
      
      {/* ── Layer 0: Store Environment Background ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]/70 z-10" />
        <img 
          src="/images/store_bg.jpg" 
          alt="Aura Denim Store" 
          className="w-full h-full object-cover object-center opacity-50" 
        />
      </div>

      {/* ── Layer 1: Background Typography & Top Tags ── */}
      <div className="absolute z-10 w-full flex flex-col justify-center items-center pointer-events-none mt-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-center mb-2 md:mb-6 opacity-60">
          <span className="font-sans text-accent tracking-[0.4em] uppercase text-[8px] md:text-[10px] font-medium whitespace-nowrap">
            Jackets · Jeans · Shirts
          </span>
          <span className="font-sans text-accent tracking-[0.4em] uppercase text-[8px] md:text-[10px] font-medium whitespace-nowrap">
            Skirts · Dresses · Overalls
          </span>
        </div>
        <motion.div className="opacity-20 flex justify-center items-center w-full">
          <h1 className="font-sans text-[4rem] md:text-[8rem] lg:text-[14rem] font-bold tracking-tighter text-white leading-none whitespace-nowrap">
            AURA DENIM
          </h1>
        </motion.div>
      </div>

      {/* ── Layer 2: Floating 3D Jacket Asset (Carousel) ── */}
      <motion.div 
        style={{ x: jacketX, y: jacketY }}
        className="absolute z-20 w-[90%] md:w-[60%] lg:w-[45%] max-w-4xl flex justify-center items-center pointer-events-none"
      >
        <div className="w-full relative aspect-square flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                y: [-10, 10, -10], // Combine entrance and continuous float by just looping the hover
                scale: 1, 
                filter: "blur(0px)",
                transition: {
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8, ease: "easeOut" },
                  filter: { duration: 0.8 }
                }
              }}
              exit={{ opacity: 0, y: -40, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.6 } }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img 
                src={CAROUSEL_ITEMS[currentIndex].src} 
                alt={CAROUSEL_ITEMS[currentIndex].alt} 
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Layer 3: Side Navigation Indicators ── */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {CAROUSEL_ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="group py-2 flex items-center justify-center"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={`h-[1px] transition-all duration-500 bg-white ${currentIndex === idx ? "w-8 opacity-100" : "w-3 opacity-30 group-hover:w-6 group-hover:opacity-60"}`} />
          </button>
        ))}
      </div>

      {/* ── Layer 4: Foreground Typography ── */}
      <motion.div 
        className="absolute z-30 w-full flex flex-col justify-center items-center pointer-events-none mt-[20vh] md:mt-[30vh]"
      >
        <motion.p 
          className="font-sans text-white/80 max-w-lg text-sm md:text-base font-light tracking-widest mx-auto leading-relaxed drop-shadow-md text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Every denim wearable you can imagine — crafted with raw indigo and timeless elegance.
        </motion.p>
      </motion.div>

      {/* ── Layer 5: Interactive UI overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-30" />
      
      <div className="relative z-40 w-full h-full flex flex-col justify-end items-center pb-8 px-6">
        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <MagneticButton>
            <a href="#collections" className="block px-12 py-4 bg-white text-black font-sans font-semibold tracking-[0.2em] uppercase text-[11px] md:text-xs hover:bg-gray-200 transition-colors duration-500 text-center rounded-sm pointer-events-auto">
              Explore Collections
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <a href="#shop" className="block px-12 py-4 border border-white/30 text-white font-sans font-semibold tracking-[0.2em] uppercase text-[11px] md:text-xs hover:border-white hover:bg-white/5 transition-all duration-500 text-center backdrop-blur-sm rounded-sm pointer-events-auto">
              Shop All Denim
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-8 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="font-sans text-[9px] uppercase tracking-widest text-white/50">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
