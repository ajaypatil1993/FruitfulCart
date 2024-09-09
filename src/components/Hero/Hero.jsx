import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "./../../assets/Images/HeroImg.png";
import leafPng from "./../../assets/Images/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] py-10 px-6 sm:px-12 lg:px-20 relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6 relative z-10">
          <motion.h1
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-relaxed font-averia"
          >
            Healthy <br />
            Fresh <span className="text-secondary"> Fruits!</span>
          </motion.h1>
          <motion.p
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl tracking-wide"
          >
            Order Now For Fresh Healthy Life
          </motion.p>
          <motion.p
            variants={FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-sm sm:text-base"
          >
            Healthy and yummy food fresh morning breakfast. Eat daily for good
            health and mind. Order now and get 20% off on your first order.
          </motion.p>
          {/* Button Section */}
          <motion.div
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn flex items-center gap-2">
              <IoBagHandleOutline />
              Order Now
            </button>
          </motion.div>
        </div>
        {/* Hero Images */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            src={HeroImg}
            alt="Hero Image"
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-xl"
          />
        </div>
        {/* Leaf Image */}
        <div className="absolute top-10 md:top-0 right-1/2 md:right-0 blur-sm opacity-80 rotate-[40deg] z-0">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={leafPng}
            alt="Leaf Image"
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
