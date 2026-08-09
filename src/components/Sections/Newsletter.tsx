"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";

export function Newsletter() {
  return (
    <section className="w-full bg-primary text-textMain py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <TextReveal className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-6">
          THE INNER CIRCLE
        </TextReveal>
        
        <motion.p 
          className="font-sans text-muted text-lg tracking-wide mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Subscribe to receive exclusive access to limited drops, editorial campaigns, and private sales.
        </motion.p>

        <motion.form 
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-transparent border-b border-white/20 text-white px-4 py-4 focus:outline-none focus:border-accent transition-colors font-sans tracking-widest placeholder:text-muted/50"
          />
          <button type="submit" className="px-10 py-4 bg-textMain text-primary font-sans font-semibold tracking-widest uppercase text-sm hover:bg-accent hover:text-primary transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
