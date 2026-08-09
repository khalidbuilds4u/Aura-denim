"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

type CheckoutStep = "CART" | "CHECKOUT";

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("CART");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Helper to parse price string to number ("₹4,999" -> 4999)
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + parsePrice(item.price) * item.quantity;
  }, 0);

  const handleProceedToCheckout = () => {
    setStep("CHECKOUT");
  };

  const handleFinalCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all details to proceed.");
      return;
    }

    const phoneNumber = "910000000000"; // Replace with actual number
    
    let message = `*NEW ORDER* 🛍️%0A%0A`;
    message += `*Customer Details:*%0A`;
    message += `Name: ${formData.name}%0A`;
    message += `Phone: ${formData.phone}%0A`;
    message += `Address: ${formData.address}%0A%0A`;
    
    message += `*Order Summary:*%0A`;
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${item.price})%0A`;
    });
    
    message += `%0A*Total: ₹${totalPrice.toLocaleString("en-IN")}*`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    
    // Optional: Clear cart after sending to WhatsApp
    // clearCart();
    // setIsCartOpen(false);
    // setStep("CART");
  };

  // Reset step to CART when drawer closes
  const handleClose = () => {
    setIsCartOpen(false);
    setTimeout(() => setStep("CART"), 300); // Reset after animation
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-white/10 z-[70] shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 min-h-[88px]">
              {step === "CHECKOUT" ? (
                <div className="flex items-center gap-4">
                  <button onClick={() => setStep("CART")} className="hover:text-accent transition-colors">
                    <ArrowLeft size={24} />
                  </button>
                  <h2 className="font-serif text-2xl tracking-widest uppercase">Checkout</h2>
                </div>
              ) : (
                <h2 className="font-serif text-2xl tracking-widest uppercase">Your Cart</h2>
              )}
              
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {step === "CART" ? (
                  <motion.div 
                    key="cart-view"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6 h-full"
                  >
                    {cart.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-white/50 space-y-4">
                        <ShoppingBag size={48} className="opacity-20" />
                        <p className="font-sans text-sm tracking-widest uppercase">Your cart is empty</p>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                          <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg" />
                          
                          <div className="flex-1 flex flex-col gap-2">
                            <h3 className="font-sans text-sm font-semibold tracking-wide">{item.name}</h3>
                            <p className="font-sans text-xs text-white/70">{item.price}</p>
                            
                            <div className="flex items-center gap-3 mt-2">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-sans text-sm w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="checkout-view"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="space-y-4">
                      <p className="font-sans text-sm text-white/70 mb-6">
                        Please provide your details for delivery. We will confirm your order via WhatsApp.
                      </p>
                      
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-widest uppercase text-white/50">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-white font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-widest uppercase text-white/50">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-white font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs tracking-widest uppercase text-white/50">Delivery Address</label>
                        <textarea 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Denim Street, Mumbai, 400001"
                          rows={3}
                          className="bg-white/5 border border-white/10 rounded-lg p-3 text-white font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-background">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-sm tracking-widest uppercase text-white/70">Total</span>
                  <span className="font-serif text-2xl">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                
                {step === "CART" ? (
                  <button
                    onClick={handleProceedToCheckout}
                    className="w-full py-4 bg-white text-black font-sans font-semibold tracking-[0.2em] uppercase text-xs hover:bg-gray-200 transition-colors flex justify-center items-center gap-2"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <button
                    onClick={handleFinalCheckout}
                    className="w-full py-4 bg-accent text-primary font-sans font-semibold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(200,169,106,0.3)]"
                  >
                    Complete Order
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
