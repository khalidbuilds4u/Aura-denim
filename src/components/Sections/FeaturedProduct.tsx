"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";
import { useCart } from "@/context/CartContext";

const specs = [
  { top: "15%", left: "10%", title: "Premium Denim", desc: "14oz Japanese Selvedge" },
  { top: "40%", right: "10%", title: "Boxy Fit", desc: "Architectural cropped drop-shoulder design" },
  { bottom: "25%", left: "15%", title: "Raw Indigo", desc: "Unwashed structured fabric" },
  { bottom: "15%", right: "15%", title: "Limited Stock", desc: "Only 150 pieces produced worldwide" },
];

export function FeaturedProduct() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "prod-featured",
      name: "The Selvedge Trucker",
      price: "₹8,999",
      image: "/images/men_3.jpg"
    });
  };

  return (
    <section className="w-full bg-secondary text-textMain py-20 md:py-32 px-4 md:px-12 relative overflow-hidden">
      <motion.div 
        className="text-center mb-12 md:mb-16 relative z-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-sans text-accent tracking-widest uppercase text-xs md:text-sm mb-4 block">Iconic Silhouette</span>
        <TextReveal className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-white">
          THE SELVEDGE TRUCKER
        </TextReveal>
      </motion.div>

      <div className="relative max-w-5xl mx-auto h-[50vh] md:h-[80vh] flex items-center justify-center">
        {/* Glow behind product */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-accent/20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
        
        {/* Main Product Image */}
        <motion.img 
          src="/images/men_3.jpg" 
          alt="The Selvedge Trucker" 
          className="relative z-10 w-auto h-full md:h-[90%] object-contain drop-shadow-2xl rounded-xl"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Floating Glassmorphism Cards (Desktop only) */}
        {specs.map((spec, idx) => (
          <motion.div
            key={idx}
            className="absolute z-20 bg-primary/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl min-w-[200px] hidden md:block"
            style={{ 
              top: spec.top, 
              left: spec.left, 
              right: spec.right, 
              bottom: spec.bottom 
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + (idx * 0.2), ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, borderColor: "rgba(200, 169, 106, 0.5)" }}
          >
            <h4 className="font-sans text-textMain text-sm font-semibold tracking-wider uppercase mb-1">{spec.title}</h4>
            <p className="font-sans text-muted text-xs">{spec.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Specs List (Hidden on Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:hidden px-4">
        {specs.map((spec, idx) => (
          <motion.div
            key={`mobile-${idx}`}
            className="bg-primary/20 border border-white/10 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="font-sans text-textMain text-sm font-semibold tracking-wider uppercase mb-1">{spec.title}</h4>
            <p className="font-sans text-muted text-xs">{spec.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button 
          onClick={handleAddToCart}
          className="px-10 py-4 bg-primary text-textMain font-sans font-semibold tracking-widest uppercase text-sm hover:bg-accent hover:text-primary transition-all duration-300 rounded-full shadow-xl"
        >
          Add to Cart
        </button>
      </motion.div>
    </section>
  );
}
