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
    <section className="w-full bg-primary text-textMain py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-sans text-accent tracking-widest uppercase text-sm mb-4 block">The Aura Standard</span>
          <TextReveal className="font-serif text-5xl md:text-6xl uppercase tracking-tighter">
            UNCOMPROMISING QUALITY
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-card/50 backdrop-blur-sm border border-white/5 p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:bg-card hover:border-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 bg-secondary/50 rounded-full flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-textMain group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="font-sans text-muted leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
