import React from "react";
import BannerPng from "../../assets/Images/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const bgSyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
 
};

const Banner3 = () => {
  return (
    <section className="container mb-12 px-6 sm:px-10 lg:px-20">
      <div
        style={bgSyle}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 rounded-3xl"
      >
        {/* Blank div image */}
        <div className=""></div>

        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-justify text-md sm:text-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              numquam non totam enim cum quis illo, repellat eligendi minima,
              impedit quia tenetur, quae quasi voluptate maiores? Accusantium
              dolores est nemo!
            </motion.p>

            {/* Button Section */}
            <motion.div
              variants={FadeUp(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Order Now</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
