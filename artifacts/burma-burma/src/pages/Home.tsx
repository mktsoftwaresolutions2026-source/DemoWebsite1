import React from "react";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Awards } from "@/components/Awards";
import { Locations } from "@/components/Locations";
import { Shop } from "@/components/Shop";
import { Culture } from "@/components/Culture";
import { Instagram } from "@/components/Instagram";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Awards />
        <Locations />
        <Shop />
        <Culture />
        <Instagram />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
