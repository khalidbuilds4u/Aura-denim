"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./UI/MagneticButton";
import { TextReveal } from "./UI/TextReveal";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, setIsCartOpen } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-colors duration-500 ${
          scrolled ? "bg-primary/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a href="#" className="font-serif text-xl md:text-2xl tracking-[0.2em] text-textMain uppercase mix-blend-difference z-50 relative cursor-pointer hover:text-accent transition-colors">
          AURA DENIM
        </a>
        
        <div className="flex items-center gap-6 z-50 relative mix-blend-difference">
          <MagneticButton
            className="relative flex items-center justify-center w-12 h-12 group cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="text-white group-hover:text-accent transition-colors" size={24} />
            {totalItems > 0 && (
              <span className="absolute top-2 right-1 w-4 h-4 bg-accent rounded-full text-[9px] font-bold text-primary flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </MagneticButton>

          <MagneticButton
            className="flex flex-col justify-center gap-1.5 w-12 h-12 items-end group cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span 
              className="w-8 h-[1px] bg-white block origin-right"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 5 : 0 }}
            />
            <motion.span 
              className="h-[1px] bg-white block origin-right"
              animate={{ width: isOpen ? "2rem" : "1.5rem", rotate: isOpen ? 45 : 0, y: isOpen ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </MagneticButton>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col gap-8 text-center">
              <a href="#shop" onClick={() => setIsOpen(false)} className="group overflow-hidden">
                <TextReveal className="font-serif text-5xl md:text-7xl text-white hover:text-accent transition-colors cursor-pointer">
                  Shop All
                </TextReveal>
              </a>
              <a href="#collections" onClick={() => setIsOpen(false)} className="group overflow-hidden">
                <TextReveal className="font-serif text-5xl md:text-7xl text-white hover:text-accent transition-colors cursor-pointer" delay={0.1}>
                  Collections
                </TextReveal>
              </a>
              <a href="#lookbook" onClick={() => setIsOpen(false)} className="group overflow-hidden">
                <TextReveal className="font-serif text-5xl md:text-7xl text-white hover:text-accent transition-colors cursor-pointer" delay={0.2}>
                  Lookbook
                </TextReveal>
              </a>
              <a href="#atelier" onClick={() => setIsOpen(false)} className="group overflow-hidden">
                <TextReveal className="font-serif text-5xl md:text-7xl text-white hover:text-accent transition-colors cursor-pointer" delay={0.3}>
                  Atelier
                </TextReveal>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
