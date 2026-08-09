"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";

export function About() {
  return (
    <section id="atelier" className="w-full bg-primary text-secondary py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Video/Image placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/images/denim_1.png" 
          alt="Denim Atelier" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <TextReveal className="font-serif text-5xl md:text-7xl uppercase tracking-widest mb-12">
          THE ATELIER
        </TextReveal>
        
        <motion.h2 
          className="font-serif text-3xl md:text-5xl mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Born from an obsession with <span className="italic text-accent">indigo</span> and raw materials.
        </motion.h2>

        <motion.div 
          className="w-[1px] h-24 bg-accent/50 mb-12"
          initial={{ height: 0 }}
          whileInView={{ height: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.p 
          className="font-sans text-muted text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Aura Denim was founded on a simple principle: denim should outlive its wearer. 
          We bypass fast fashion entirely, focusing on slow, deliberate craftsmanship.
        </motion.p>
        
        <motion.p 
          className="font-sans text-muted text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          Every yard of our 14oz raw denim is carefully woven, dyed in deep indigo, and constructed in Mumbai. 
          From the hand-hammered copper rivets to the selvedge stitching, we build garments designed to age, fade, and tell your unique story over decades.
        </motion.p>
      </div>
    </section>
  );
}
