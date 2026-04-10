import React from "react";

export function Marquee() {
  return (
    <section className="bg-primary py-6 md:py-8 overflow-hidden border-y border-primary-foreground/10">
      <div className="flex animate-[marqueeNotice_15s_linear_infinite] whitespace-nowrap">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="text-white text-2xl md:text-4xl font-heading tracking-widest font-semibold px-4 flex items-center">
            NOTICE BOARD <span className="mx-4 text-secondary opacity-80">•</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeNotice {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
