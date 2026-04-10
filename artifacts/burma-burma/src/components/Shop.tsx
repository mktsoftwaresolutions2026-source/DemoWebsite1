import React from "react";
import { Button } from "@/components/ui/button";

export function Shop() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden" id="shop">
      <div className="absolute inset-0">
        <img 
          src="https://framerusercontent.com/images/ergTIY9XuK6WwsN9Ws9kxdRlX9Q.png" 
          alt="Shop products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 container mx-auto">
        <span className="text-white/90 uppercase tracking-widest text-sm md:text-base font-medium mb-6">
          Presenting 'Shop' from Burma Burma
        </span>
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-bold max-w-4xl leading-tight mb-6">
          HOME-COOKED BURMESE DELIGHTS MADE SIMPLE
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10">
          An extension of our treasured Burmese culinary heritage
        </p>
        <a href="https://shop.burmaburma.in" target="_blank" rel="noreferrer">
          <Button className="bg-secondary hover:bg-secondary/90 text-white border-none text-lg px-8 py-6 rounded-none">
            Explore Shop
          </Button>
        </a>
      </div>
    </section>
  );
}
