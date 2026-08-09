"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-textMain px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-textMain">
              AURA DENIM
            </h2>
            <p className="font-sans text-muted max-w-sm">
              Luxury denim conceptualized in Mumbai, designed for the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold tracking-widest uppercase text-sm mb-6 text-accent">Navigation</h4>
            <ul className="space-y-4 font-sans text-muted">
              <li><a href="#collections" className="hover:text-textMain transition-colors">Collections</a></li>
              <li><a href="#shop" className="hover:text-textMain transition-colors">Shop</a></li>
              <li><a href="#lookbook" className="hover:text-textMain transition-colors">Lookbook</a></li>
              <li><a href="#about" className="hover:text-textMain transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold tracking-widest uppercase text-sm mb-6 text-accent">Socials</h4>
            <ul className="space-y-4 font-sans text-muted">
              <li><a href="#" className="hover:text-textMain transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-textMain transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-textMain transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-muted font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Studios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-textMain transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-textMain transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
