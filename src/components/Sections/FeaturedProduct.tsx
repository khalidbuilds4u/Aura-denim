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
    <section className="w-full bg-secondary text-textMain py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="text-center mb-16 relative z-20">
        <span className="font-sans text-accent tracking-widest uppercase text-sm mb-4 block">Iconic Silhouette</span>
        <TextReveal className="font-serif text-5xl md:text-7xl uppercase tracking-tighter text-white">
          THE SELVEDGE TRUCKER
        </TextReveal>
      </div>

      <div className="relative max-w-5xl mx-auto h-[60vh] md:h-[80vh] flex items-center justify-center">
        {/* Glow behind product */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Main Product Image (Needs to be a cutout ideally, we'll use a clean image) */}
        <motion.img 
          src="/images/men_3.jpg" 
          alt="The Selvedge Trucker" 
          className="relative z-10 w-auto h-[90%] object-contain drop-shadow-2xl rounded-xl"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Floating Glassmorphism Cards */}
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
            transition={{ duration: 0.6, delay: 0.5 + (idx * 0.2) }}
            whileHover={{ scale: 1.05, borderColor: "rgba(200, 169, 106, 0.5)" }}
          >
            <h4 className="font-sans text-textMain text-sm font-semibold tracking-wider uppercase mb-1">{spec.title}</h4>
            <p className="font-sans text-muted text-xs">{spec.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 relative z-20">
        <button 
          onClick={handleAddToCart}
          className="px-10 py-4 bg-primary text-textMain font-sans font-semibold tracking-widest uppercase text-sm hover:bg-accent hover:text-primary transition-all duration-300 rounded-full shadow-xl"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
