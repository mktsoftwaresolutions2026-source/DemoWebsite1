import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-8 border-t border-primary-foreground/10 text-white/90">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <img 
                src="https://framerusercontent.com/images/ABr2TTtjAyMVbydLm4YWrl72j4.png" 
                alt="Burma Burma Mascot" 
                className="w-24 h-24 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-lg leading-relaxed mb-8 max-w-md">
              Burma Burma, India's only speciality Burmese Restaurant & Tea Room, is an ode to the people and culture of Burma. Come explore Burmese cuisine rooted in tradition, but reimagined with contemporary flair.
            </p>
            <div className="space-y-4">
              <p>The Ruby, Unit No. 3 SW, 3rd Floor, Senapati Bapat Marg, Dadar West, Mumbai – 400028</p>
              <p>
                <a href="mailto:info@burmaburma.in" className="hover:text-secondary transition-colors">info@burmaburma.in</a>
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-heading font-semibold mb-6 text-white">Sitemap</h3>
            <ul className="space-y-4">
              <li><a href="https://burmaburma.in/our-food" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Food</a></li>
              <li><a href="https://burmaburma.in/press-accolades" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Press &amp; Accolades</a></li>
              <li><a href="https://burmaburma.in/recipes" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Recipes</a></li>
              <li><a href="https://burmaburma.in/blog" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="https://burmaburma.in/our-story" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Our Story</a></li>
              <li><a href="https://burmaburma.in/csr" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">CSR Programmes</a></li>
              <li><a href="https://burmaburma.in/shareholders-info" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-heading font-semibold mb-6 text-white">Locations</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li><a href="#locations" className="hover:text-secondary transition-colors">Mumbai</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Bengaluru</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">New Delhi</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Gurugram</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Noida</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Chandigarh</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Kolkata</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Ahmedabad</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors">Hyderabad</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2022 Burma Burma, All rights reserved. A division of Hunger Pangs Private Limited</p>
          <div className="flex items-center">
            {/* Using text placeholder for TripAdvisor since logo url wasn't provided, but normally we'd put an img here */}
            <span className="font-bold text-white/80">TripAdvisor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
