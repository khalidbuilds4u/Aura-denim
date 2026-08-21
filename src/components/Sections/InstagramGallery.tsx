"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { TextReveal } from "../UI/TextReveal";

const posts = [
  { image: "/images/women_1.jpg", aspect: "aspect-square" },
  { image: "/images/men_2.jpg", aspect: "aspect-[3/4]" },
  { image: "/images/women_3.png", aspect: "aspect-[4/3]" },
  { image: "/images/men_4.jpg", aspect: "aspect-square" },
  { image: "/images/women_5.png", aspect: "aspect-[3/4]" },
  { image: "/images/men_5.jpg", aspect: "aspect-square" },
];

export function InstagramGallery() {
  return (
    <section className="w-full bg-secondary py-20 md:py-32 px-4 md:px-12 text-textMain">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-accent tracking-widest uppercase text-xs md:text-sm mb-4 block">@auradenim</span>
            <TextReveal className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
              JOIN THE ARCHIVE
            </TextReveal>
          </motion.div>
          <motion.button 
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-colors mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaInstagram className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase font-semibold">Follow Us</span>
          </motion.button>
        </div>

        {/* CSS Columns Masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              className={`relative w-full overflow-hidden rounded-xl cursor-pointer group break-inside-avoid ${post.aspect}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src={post.image} 
                alt={`Instagram Post ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <FaInstagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
