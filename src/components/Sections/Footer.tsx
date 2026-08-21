"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-textMain px-4 md:px-12 py-12 md:py-16 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 md:mb-24">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-4 md:mb-6 text-textMain">
              AURA DENIM
            </h2>
            <p className="font-sans text-muted max-w-sm mx-auto md:mx-0 text-sm md:text-base">
              Luxury denim conceptualized in Mumbai, designed for the world.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-sans font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 text-accent">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 font-sans text-muted text-sm md:text-base">
              <li><a href="#collections" className="hover:text-textMain transition-colors">Collections</a></li>
              <li><a href="#shop" className="hover:text-textMain transition-colors">Shop</a></li>
              <li><a href="#lookbook" className="hover:text-textMain transition-colors">Lookbook</a></li>
              <li><a href="#about" className="hover:text-textMain transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-sans font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 text-accent">Socials</h4>
            <ul className="space-y-3 md:space-y-4 font-sans text-muted text-sm md:text-base">
              <li><a href="#" className="hover:text-textMain transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-textMain transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-textMain transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-muted font-sans text-xs md:text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Aura Studios. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-textMain transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-textMain transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
