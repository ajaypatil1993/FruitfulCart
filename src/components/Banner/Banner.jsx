import React from "react";
import BannerPng from "../../assets/Images/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 py-14 px-6 sm:px-12 lg:px-20">
        {/* Banner Image */}
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt="banner"
            className="w-[250px] sm:w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl uppercase"
            >
              Brand info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              numquam non totam enim cum quis illo, repellat eligendi minima,
              impedit quia tenetur, quae quasi voluptate maiores? Accusantium
              dolores est nemo!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-justify"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              eius quae sequi blanditiis! Voluptas laborum ipsum repudiandae
              reiciendis, ab architecto!
            </motion.p>
            {/* Button Section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
