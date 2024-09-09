import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20"
      >
        {/* Logo Section */}
        <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-0">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">fulCart</p>
          <BiSolidLeaf className="text-green-600" />
        </div>
        {/* Social Icons */}
        <div className="text-xl sm:text-2xl md:text-3xl flex gap-4 text-gray-700">
          <FaInstagram className="hover:text-primary transition-colors duration-300" />
          <FaTwitter className="hover:text-primary transition-colors duration-300" />
          <FaFacebook className="hover:text-primary transition-colors duration-300" />
        </div>
      </motion.div>
      {/* Copyright */}
      <div className="text-center mt-4 text-gray-500 text-sm">
        &copy; 2024 FruitfulCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
