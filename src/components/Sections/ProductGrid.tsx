"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../UI/TextReveal";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  { 
    id: "prod-1",
    name: "Raw Selvedge Trucker Jacket", 
    price: "₹4,999", 
    image1: "/images/men_1.jpg", 
    image2: "/images/women_1.jpg", 
    tag: "NEW",
    fabric: "14oz Japanese Selvedge"
  },
  { 
    id: "prod-2",
    name: "Wide-Leg Vintage Wash Jeans", 
    price: "₹3,499", 
    image1: "/images/women_2.jpg", 
    image2: "/images/men_2.jpg", 
    tag: "BESTSELLER",
    fabric: "12oz Organic Cotton Denim"
  },
  { 
    id: "prod-3",
    name: "Oversized Chambray Shirt", 
    price: "₹2,499", 
    image1: "/images/men_3.jpg", 
    image2: "/images/women_3.png", 
    tag: "",
    fabric: "8oz Chambray Twill"
  },
  { 
    id: "prod-4",
    name: "A-Line Denim Maxi Skirt", 
    price: "₹3,299", 
    image1: "/images/women_4.jpg", 
    image2: "/images/men_4.jpg", 
    tag: "LIMITED",
    fabric: "10oz Soft-Wash Indigo"
  },
  { 
    id: "prod-5",
    name: "Classic Bib Overalls", 
    price: "₹5,499", 
    image1: "/images/women_5.png", 
    image2: "/images/men_5.jpg", 
    tag: "NEW",
    fabric: "13oz Raw Indigo Denim"
  },
  { 
    id: "prod-6",
    name: "Denim Trench Coat", 
    price: "₹7,999", 
    image1: "/images/men_1.jpg", 
    image2: "/images/women_2.jpg", 
    tag: "LIMITED",
    fabric: "16oz Heavyweight Selvedge"
  },
  { 
    id: "prod-7",
    name: "Sherpa-Lined Denim Vest", 
    price: "₹3,999", 
    image1: "/images/women_1.jpg", 
    image2: "/images/men_3.jpg", 
    tag: "",
    fabric: "14oz Raw Denim + Sherpa"
  },
  { 
    id: "prod-8",
    name: "Denim Midi Shirt Dress", 
    price: "₹4,299", 
    image1: "/images/women_3.png", 
    image2: "/images/women_5.png", 
    tag: "BESTSELLER",
    fabric: "9oz Soft Chambray"
  }
];

export function ProductGrid() {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <section id="shop" className="py-20 md:py-40 px-4 md:px-12 bg-background relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TextReveal className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest text-textMain mb-4">
              The Archive
            </TextReveal>
            <p className="font-sans text-secondary max-w-md tracking-wider text-sm md:text-base">
              Explore our complete collection of raw, washed, and distressed denim artifacts.
            </p>
          </motion.div>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-colors p-2 -ml-2">
              View All
            </button>
            <button className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors p-2">
              Filter
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-primary mb-4 md:mb-6 rounded-lg md:rounded-none">
                {product.tag && (
                  <div className="absolute top-4 left-4 z-20 bg-accent text-primary text-[9px] md:text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                    {product.tag}
                  </div>
                )}
                
                <img 
                  src={product.image1} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <img 
                  src={product.image2} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform"
                />

                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                  <button 
                    className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image1
                      });
                      setIsCartOpen(true);
                    }}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingBag size={18} />
                  </button>
                  <button className="w-12 h-12 bg-primary/80 backdrop-blur text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-xl" aria-label="Quick view">
                    <Eye size={18} />
                  </button>
                  <button className="w-12 h-12 bg-primary/80 backdrop-blur text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform shadow-xl" aria-label="Add to wishlist">
                    <Heart size={18} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start gap-4 px-1 md:px-0">
                <div>
                  <h3 className="font-sans font-semibold text-xs md:text-sm tracking-widest uppercase text-textMain mb-1">
                    {product.name}
                  </h3>
                  <p className="font-sans text-[10px] md:text-xs text-secondary tracking-wider">
                    {product.fabric}
                  </p>
                </div>
                <span className="font-serif text-base md:text-lg text-textMain">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
