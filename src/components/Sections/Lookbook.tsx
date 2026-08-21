"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";

export function Lookbook() {
  return (
    <section id="lookbook" className="w-full bg-[#111111] text-white py-20 md:py-32 px-4 md:px-12 relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 md:mb-32 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-accent tracking-widest uppercase text-xs md:text-sm mb-4 block">Visual Archive</span>
          <TextReveal className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6 text-white">
            EDITORIAL LOOKBOOK
          </TextReveal>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 md:gap-32 max-w-7xl mx-auto">
        {/* Look 1 — The Trucker Jacket */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
          <motion.div 
            className="w-full md:w-[60%] h-[50vh] md:h-[70vh]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="/images/men_5.jpg" 
              alt="Denim Jacket Look" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 rounded-xl"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-[40%] flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-accent tracking-widest text-xs md:text-sm mb-2 md:mb-4">LOOK 01</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 text-white">THE TRUCKER</h3>
            <p className="font-sans text-white/60 font-light leading-relaxed max-w-sm text-sm md:text-base">
              Our signature raw selvedge trucker jacket. 14oz Japanese denim with copper hardware. Designed to fade beautifully with every wear.
            </p>
          </motion.div>
        </div>

        {/* Look 2 — The Denim Dress */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24">
          <motion.div 
            className="w-full md:w-[60%] h-[50vh] md:h-[70vh]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="/images/women_5.png" 
              alt="Denim Overalls Look" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 rounded-xl"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-[40%] flex flex-col justify-center md:items-end text-left md:text-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-accent tracking-widest text-xs md:text-sm mb-2 md:mb-4">LOOK 02</span>
            <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 text-white">THE OVERALLS</h3>
            <p className="font-sans text-white/60 font-light leading-relaxed max-w-sm text-sm md:text-base">
              Classic bib overalls reimagined in 13oz raw indigo. Modest coverage with an effortless, utilitarian silhouette built for everyday wear.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
