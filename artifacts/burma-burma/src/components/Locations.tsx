import React from "react";
import { ArrowRight } from "lucide-react";

const locations = [
  { src: "https://framerusercontent.com/images/VTnXs9iugUEgsYqtLf9n2TS5I.png", city: "Mumbai", href: "https://burmaburma.in/locations#mumbai-1" },
  { src: "https://framerusercontent.com/images/LdIAa0mPFJNtJ8huPXwRgLQxd8.png", city: "New Delhi", href: "https://burmaburma.in/locations#new-delhi" },
  { src: "https://framerusercontent.com/images/vHrKI1lCwjGknIPrDoMUNkc0iQ.png", city: "Bengaluru", href: "https://burmaburma.in/locations#bengaluru-1" },
  { src: "https://framerusercontent.com/images/CrUi11hHmLwLE0743cBfPXBDU.png", city: "New Delhi", href: "https://burmaburma.in/locations#new-delhi" }
];

export function Locations() {
  return (
    <section className="py-24 bg-background" id="locations">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-foreground text-4xl md:text-6xl font-heading font-semibold">Locations</h2>
          <a href="https://burmaburma.in/locations" target="_blank" rel="noreferrer" className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors gap-2 text-lg">
            View more <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <a key={index} href={loc.href} target="_blank" rel="noreferrer" className="group cursor-pointer no-underline">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 bg-muted">
                <img 
                  src={loc.src} 
                  alt={loc.city} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground group-hover:text-secondary transition-colors text-center">
                {loc.city}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
