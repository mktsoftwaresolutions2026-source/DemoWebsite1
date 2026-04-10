import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://framerusercontent.com/images/wA8jgqFt9V0QUKWE86Gh60wZs.jpg",
  "https://framerusercontent.com/images/j55dhvBOEIobMI6PbQqSiInBHdE.jpg",
  "https://framerusercontent.com/images/QhQKJZqaY7XM6Wt66y06jFmBZ0.webp",
  "https://framerusercontent.com/images/Tzg0dIOjHG3t9bJoXu7GfXS2a2Q.webp",
  "https://framerusercontent.com/images/IktDAeygR00LqNkfKo5FCbbL7Hw.jpg",
  "https://framerusercontent.com/images/JYahkaFZsqKIga9jv0qZ9GO9eI.webp",
  "https://framerusercontent.com/images/jW0QtrH4wawhrSH699CRW2ROoY.jpg",
  "https://framerusercontent.com/images/8GFXr4qHKlV2SXdAu0RHplSJLhc.jpg"
];

export function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background overflow-hidden" id="restaurant">
      <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-foreground text-4xl md:text-6xl font-heading font-semibold">About Us</h2>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="pl-4 md:pl-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-8">
            {images.map((src, index) => (
              <div 
                key={index} 
                className={`flex-none relative overflow-hidden rounded-xl bg-muted ${
                  index % 3 === 0 ? "w-[80vw] md:w-[40vw] aspect-[16/10]" : 
                  index % 2 === 0 ? "w-[60vw] md:w-[30vw] aspect-square" : 
                  "w-[70vw] md:w-[25vw] aspect-[3/4]"
                }`}
              >
                <img 
                  src={src} 
                  alt={`About us ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
