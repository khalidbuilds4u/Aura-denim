"use client";

import { motion } from "framer-motion";
import { Scissors, Leaf, Globe, Zap, Box } from "lucide-react";
import { TextReveal } from "../UI/TextReveal";

const features = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Luxury Fabric",
    desc: "Sourced from premier mills across Italy and Japan, offering unparalleled texture and durability.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainable Materials",
    desc: "Consciously crafted using organic cotton and recycled synthetics to minimize our footprint.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Worldwide Shipping",
    desc: "Delivered globally with premium packaging and expedited courier services.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Limited Production",
    desc: "Each collection is produced in small batches to ensure exclusivity and zero waste.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Designed for Everyday",
    desc: "Architectural silhouettes engineered for maximum comfort in urban environments.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-primary text-textMain py-20 md:py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-sans text-accent tracking-widest uppercase text-xs md:text-sm mb-4 block">The Aura Standard</span>
          <TextReveal className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
            UNCOMPROMISING QUALITY
          </TextReveal>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-card/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:bg-card hover:border-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary/50 rounded-full flex items-center justify-center text-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 text-textMain group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="font-sans text-muted leading-relaxed font-light text-sm md:text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
