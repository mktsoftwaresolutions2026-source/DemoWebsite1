import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Decorative SVG Border top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-4 border-t-4 border-secondary/50 border-dotted opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-4 border-b-4 border-secondary/50 border-dotted opacity-50" />
      
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <span className="text-secondary uppercase tracking-widest text-sm md:text-base font-medium mb-4 block">
          Discover Burma
        </span>
        <h2 className="text-white text-4xl md:text-5xl font-heading font-semibold mb-6">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Get the latest on new specials, limited-edition menus, stories from our kitchen, and more – straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 rounded-none focus-visible:ring-secondary"
            required
          />
          <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white h-14 px-8 rounded-none text-lg">
            Submit
          </Button>
        </form>
        <p className="text-white/50 text-sm">
          You can unsubscribe at any time
        </p>
      </div>
    </section>
  );
}
