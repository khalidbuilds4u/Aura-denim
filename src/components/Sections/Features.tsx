"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Leaf, Scissors, Sparkles, Box, Truck } from "lucide-react";

const features = [
  {
    title: "Premium Fabric",
    desc: "Sourced from the finest mills globally, offering unparalleled comfort.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: "Handcrafted Quality",
    desc: "Meticulously stitched by expert artisans.",
    icon: <Scissors className="w-8 h-8" />,
  },
  {
    title: "Eco Conscious",
    desc: "Sustainable practices embedded in every step.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Limited Editions",
    desc: "Exclusive drops. Once they are gone, they are gone.",
    icon: <Box className="w-8 h-8" />,
  },
  {
    title: "Worldwide Shipping",
    desc: "Delivered to your door, anywhere in the world.",
    icon: <Truck className="w-8 h-8" />,
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current && scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;
      
      const ctx = gsap.context(() => {
        gsap.to(scrollRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full bg-primary text-secondary overflow-hidden relative border-b border-secondary/10"
    >
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-10">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-widest text-secondary/40">
          The Details
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex h-full w-[300vw] items-center px-[20vw]"
      >
        <div className="flex gap-16 md:gap-32">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="w-[70vw] md:w-[30vw] shrink-0 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-3xl md:text-5xl mb-6">
                {feature.title}
              </h3>
              <p className="font-sans text-muted text-lg font-light tracking-wide">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
