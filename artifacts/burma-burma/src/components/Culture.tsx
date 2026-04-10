import React from "react";
import { Button } from "@/components/ui/button";

export function Culture() {
  return (
    <section className="relative w-full py-32 overflow-hidden" id="culture">
      <div className="absolute inset-0">
        <img 
          src="https://framerusercontent.com/images/O6oMNJXd3D31JxnJRGt6FrsxMoM.jpg" 
          alt="Burmese Culture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 container mx-auto">
        <span className="text-secondary uppercase tracking-widest text-sm md:text-base font-medium mb-6">
          Burmese Culture
        </span>
        <h2 className="text-white text-4xl md:text-6xl font-heading font-bold max-w-3xl leading-tight mb-6">
          Cook the Burma Burma Way with Our Recipes
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10">
          Check it out today!
        </p>
        <a href="https://burmaburma.in/recipes" target="_blank" rel="noreferrer">
          <Button className="bg-secondary hover:bg-secondary/90 text-white border-none text-lg px-8 py-6 rounded-none">
            Explore Recipes
          </Button>
        </a>
      </div>
    </section>
  );
}
