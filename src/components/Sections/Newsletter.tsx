"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";

export function Newsletter() {
  return (
    <section className="w-full bg-primary text-textMain py-20 md:py-32 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <TextReveal className="font-serif text-4xl md:text-6xl uppercase tracking-tighter mb-4 md:mb-6">
            THE INNER CIRCLE
          </TextReveal>
        </motion.div>
        
        <motion.p 
          className="font-sans text-muted text-sm md:text-lg tracking-wide mb-8 md:mb-12 font-light px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Subscribe to receive exclusive access to limited drops, editorial campaigns, and private sales.
        </motion.p>

        <motion.form 
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-transparent border-b border-white/20 text-white px-2 md:px-4 py-4 focus:outline-none focus:border-accent transition-colors font-sans tracking-widest placeholder:text-muted/50 text-sm w-full"
          />
          <button type="submit" className="w-full md:w-auto px-10 py-4 bg-textMain text-primary font-sans font-semibold tracking-widest uppercase text-xs md:text-sm hover:bg-accent hover:text-primary transition-colors whitespace-nowrap mt-4 md:mt-0">
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
