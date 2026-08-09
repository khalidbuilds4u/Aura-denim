"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Denim Jackets",
    desc: "Raw selvedge truckers, oversized bombers, and cropped moto jackets in heavyweight Japanese denim.",
    image: "/images/men_2.jpg",
  },
  {
    title: "Jeans & Trousers",
    desc: "Wide-leg, straight-fit, and high-waisted silhouettes in washed and raw indigo finishes.",
    image: "/images/women_2.jpg",
  },
  {
    title: "Denim Shirts",
    desc: "Tailored button-downs and oversized western shirts in chambray, twill, and raw denim.",
    image: "/images/men_3.jpg",
  },
  {
    title: "Denim Dresses & Skirts",
    desc: "Floor-length maxi dresses, A-line midi skirts, and pinafore dresses in soft-wash indigo.",
    image: "/images/women_3.png",
  },
  {
    title: "Overalls & Dungarees",
    desc: "Classic bib overalls, relaxed-fit dungarees, and utilitarian jumpsuits for effortless style.",
    image: "/images/women_4.jpg",
  },
  {
    title: "Denim Outerwear",
    desc: "Long trench coats, sherpa-lined overcoats, and puffer jackets crafted from heavyweight denim.",
    image: "/images/men_4.jpg",
  },
];

export function Collections() {
  return (
    <section id="collections" className="w-full bg-primary text-white py-32 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 max-w-7xl mx-auto">
        <div>
          <span className="font-sans text-accent tracking-widest uppercase text-sm mb-4 block">Every Kind of Denim</span>
          <TextReveal className="font-serif text-5xl md:text-7xl uppercase tracking-tighter text-white">
            THE FULL WARDROBE
          </TextReveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {collections.map((col, idx) => (
          <motion.div
            key={idx}
            className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden group cursor-pointer rounded-2xl"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${col.image})` }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <motion.div
              className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
            />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-end">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                  variants={{
                    rest: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <ArrowUpRight className="text-white w-6 h-6" />
                </motion.div>
              </div>
              
              <div className="max-w-xl">
                <motion.h3 
                  className="font-serif text-3xl md:text-5xl text-white mb-3 uppercase tracking-tight"
                  variants={{
                    rest: { y: 20 },
                    hover: { y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  {col.title}
                </motion.h3>
                <motion.p 
                  className="font-sans text-white/70 text-sm md:text-base font-light tracking-wide"
                  variants={{
                    rest: { opacity: 0.7, y: 10 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                >
                  {col.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
