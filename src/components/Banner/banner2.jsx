import React from "react";
import BannerPng from "../../assets/Images/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-6 sm:px-12 lg:px-20">
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
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
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
              <button className="primary-btn">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt="banner"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] drop-shadow-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
