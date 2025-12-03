import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-600 mb-4">
              Sri Sai Ganesh Developers<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400">
              Transforming landscapes and building futures with unparalleled
              expertise in land development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Meeseva, Neelakundilu</li>
              <li>Visakhapatnam</li>
              <li>+91 9912514789</li>
              <li>ssgdevelopers@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Sri Sai Ganesh Land Development. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
