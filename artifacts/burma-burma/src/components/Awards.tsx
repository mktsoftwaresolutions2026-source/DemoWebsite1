import React from "react";
import { motion } from "framer-motion";

const awards = [
  { src: "https://framerusercontent.com/images/WhihCRAVywdpCrGLO3RTBRIT0DQ.png", alt: "Forbes 30 under 30" },
  { src: "https://framerusercontent.com/images/NEQIgkwoL48TpQaBSoBoUick5a0.png", alt: "Times Food Awards" },
  { src: "https://framerusercontent.com/images/z2Onnb8WqcCCTSioUTTA3A86e4Y.png", alt: "Certificate of Excellence" },
  { src: "https://framerusercontent.com/images/OcDebuvd0PadcbhqnA7vCBYMm1s.png", alt: "CNBC" },
  { src: "https://framerusercontent.com/images/1oLs7fJTRMayzQnWLjpuqejdklo.png", alt: "Top Chef winner" },
  { src: "https://framerusercontent.com/images/f6390ZJ3LtRaToG8l5lFQoO02mQ.png", alt: "The Big F Award" },
  { src: "https://framerusercontent.com/images/Q2DBKQRU29iEV3MHjygevTMmI.png", alt: "Food Talk India" }
];

export function Awards() {
  return (
    <section className="py-24 bg-muted/30" id="people">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-foreground text-3xl md:text-5xl font-heading font-semibold mb-16">
          Thank you for loving Burma Burma
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-24 md:w-32 hover:scale-110 transition-transform duration-300"
            >
              <img src={award.src} alt={award.alt} className="w-full object-contain mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
