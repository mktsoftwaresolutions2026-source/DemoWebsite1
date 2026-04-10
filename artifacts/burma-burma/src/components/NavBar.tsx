import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/logo.svg";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary py-3 shadow-md" : "bg-primary/95 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 flex items-center gap-4">
          <img src={logo} alt="Burma Burma Logo" className="h-8 w-auto brightness-0 invert" />
          <div className="hidden sm:inline-block border border-white px-3 py-0.5">
            <span className="text-white font-serif tracking-widest text-xs whitespace-nowrap">
              • BURMA BURMA •
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-white font-medium tracking-wide">
          <a href="#restaurant" className="hover:text-secondary transition-colors">Restaurant</a>
          <a href="#culture" className="hover:text-secondary transition-colors">Culture</a>
          <a href="#people" className="hover:text-secondary transition-colors">People</a>
          <a href="#shop" className="hover:text-secondary transition-colors">Shop</a>
        </nav>

        {/* Social / Action */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#locations" className="hover:text-secondary transition-colors flex items-center gap-1 border border-white/30 rounded-full px-3 py-1 text-sm">
            <MapPin size={16} />
            <span>Locations</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-primary h-screen flex flex-col items-center justify-center space-y-8 z-40"
          >
            <a href="#restaurant" className="text-white text-2xl font-heading" onClick={() => setMobileMenuOpen(false)}>Restaurant</a>
            <a href="#culture" className="text-white text-2xl font-heading" onClick={() => setMobileMenuOpen(false)}>Culture</a>
            <a href="#people" className="text-white text-2xl font-heading" onClick={() => setMobileMenuOpen(false)}>People</a>
            <a href="#shop" className="text-white text-2xl font-heading" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <div className="flex items-center space-x-8 text-white mt-8">
              <a href="https://instagram.com"><Instagram size={28} /></a>
              <a href="https://facebook.com"><Facebook size={28} /></a>
              <a href="#locations"><MapPin size={28} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
