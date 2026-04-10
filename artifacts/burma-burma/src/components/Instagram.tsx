import React from "react";
import { Instagram as InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  "https://framerusercontent.com/images/IaXP4WQhXt1STDWy6rLdriZxJU.jpeg",
  "https://framerusercontent.com/images/OE5UyMwQYDTh9PaL84sVqDwKDsk.webp",
  "https://framerusercontent.com/images/r92FQQ2dNeYcxHoKbUgoF5BNbQ.jpeg"
];

export function Instagram() {
  return (
    <section className="py-24 bg-background text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-foreground text-3xl md:text-4xl font-heading mb-4">
          We are social, follow us on
        </h2>
        <a 
          href="https://instagram.com/burmaburmaindia" 
          target="_blank" 
          rel="noreferrer"
          className="text-primary text-4xl md:text-6xl font-heading font-bold hover:text-secondary transition-colors inline-block mb-16"
        >
          @burmaburmaindia
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/burmaburmaindia"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-square overflow-hidden bg-muted cursor-pointer"
            >
              <img 
                src={post} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" size={48} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
