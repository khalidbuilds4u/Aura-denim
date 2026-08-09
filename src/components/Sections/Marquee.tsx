"use client";

import { motion } from "framer-motion";

const phrases = [
  "14OZ RAW SELVEDGE",
  "INDIGO DYED",
  "AURA DENIM STUDIO",
  "HEAVYWEIGHT CRAFTSMANSHIP",
];

export function Marquee() {
  return (
    <section className="w-full bg-secondary text-primary py-8 overflow-hidden border-y border-primary/20">
      <div className="flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-12 px-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {phrases.map((phrase, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="font-serif text-4xl md:text-6xl uppercase tracking-widest">
                  {phrase}
                </span>
                <span className="w-4 h-4 rounded-full bg-accent block" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
