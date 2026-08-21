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
    <section id="collections" className="w-full bg-primary text-white py-24 md:py-32 px-4 md:px-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-accent tracking-widest uppercase text-[10px] md:text-sm mb-4 block">Every Kind of Denim</span>
          <TextReveal className="font-serif text-4xl md:text-6xl lg:text-[5rem] uppercase tracking-tighter text-white">
            THE FULL WARDROBE
          </TextReveal>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
        {collections.map((col, idx) => (
          <motion.div
            key={idx}
            className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden group cursor-pointer rounded-xl md:rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${col.image})` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Brightness Overlay on Hover */}
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between pointer-events-none">
              
              {/* Top Right Icon */}
              <div className="flex justify-end">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                  <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              
              {/* Bottom Text Content */}
              <div className="max-w-xl">
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-3 uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {col.title}
                </h3>
                <p className="font-sans text-white/70 text-xs md:text-base font-light tracking-wide opacity-70 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                  {col.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
