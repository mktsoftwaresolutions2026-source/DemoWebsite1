import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://framerusercontent.com/images/wA8jgqFt9V0QUKWE86Gh60wZs.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="https://framerusercontent.com/images/ABr2TTtjAyMVbydLm4YWrl72j4.png" 
            alt="Burma Burma Mascot" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-semibold max-w-4xl leading-tight text-balance"
        >
          Award-Winning Burmese Restaurant & Tea Room
        </motion.h1>
      </div>

      {/* Ornamental Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-primary flex overflow-hidden border-t-2 border-primary/50">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center w-max">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="flex items-center mx-2 shrink-0">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary mx-3" />
              <div className="text-white opacity-80 text-lg md:text-xl font-bold">+</div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
