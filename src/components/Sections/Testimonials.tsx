"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";

const testimonials = [
  {
    quote: "The attention to detail is unparalleled. This isn't just streetwear; it's modern tailoring.",
    author: "Arjun M.",
    role: "Creative Director",
    image: "/images/hero_1.png",
  },
  {
    quote: "I've replaced my entire wardrobe. The fabrics, the cut, the drape—everything is absolutely perfect.",
    author: "Priya S.",
    role: "Architect",
    image: "/images/denim_2.png",
  },
  {
    quote: "Finally, a brand that understands minimal luxury without compromising on the edge of street culture.",
    author: "Rohan K.",
    role: "Photographer",
    image: "/images/hero_3.png",
  }
];

export function Testimonials() {
  return (
    <section className="w-full bg-primary py-32 px-6 md:px-12 overflow-hidden text-textMain">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-sans text-accent tracking-widest uppercase text-sm mb-4 block">The Community</span>
          <TextReveal className="font-serif text-5xl md:text-6xl uppercase tracking-tighter">
            WORDS OF VANGUARD
          </TextReveal>
        </div>

        {/* Horizontal Scroll Container (using CSS overflow for simplicity, can enhance with GSAP later) */}
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[85vw] md:min-w-[500px] bg-card p-10 md:p-12 rounded-2xl snap-center flex flex-col justify-between border border-white/5 shadow-2xl relative group hover:border-white/10 transition-colors"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              {/* Large Quotation Mark */}
              <div className="absolute top-6 right-10 font-serif text-8xl text-white/5 pointer-events-none select-none group-hover:text-accent/10 transition-colors">
                &rdquo;
              </div>

              <p className="font-serif text-2xl md:text-3xl leading-snug mb-12 relative z-10">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                  <img src={test.image} alt={test.author} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h5 className="font-sans font-semibold tracking-wider text-sm uppercase text-textMain">{test.author}</h5>
                  <span className="font-sans text-muted text-xs tracking-widest uppercase">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
