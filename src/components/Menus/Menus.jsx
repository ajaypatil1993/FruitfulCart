import { div } from "framer-motion/client";
import React from "react";
import Fruit1 from "../../assets/Images/apple.png";
import Fruit2 from "../../assets/Images/orange.png";
import Fruit3 from "../../assets/Images/avocado.png";
import Fruit4 from "../../assets/Images/cherry.png";
import { AnimatePresence, motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
  {
    id: 1,
    name: "Fresh Red Apple",
    link: "/",
    price: "$2.00",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    name: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    name: "Fresh Avaocado",
    link: "/",
    price: "$4.00",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    name: "Fresh Cherries",
    link: "/",
    price: "$5.00",
    img: Fruit4,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 px-6 sm:px-10 lg:px-20">
        {/* Menu Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg flex flex-row justify-around items-center gap-3 transition-all duration-300 ease-in-out"
            >
              {/* Menu Image */}
              <img
                src={menu.img}
                alt={menu.name}
                className="w-[60px] sm:w-[70px] lg:w-[80px] mb-4 transform -translate-y-6 scale-110"
              />

              {/* Menu Info */}
              <div>
                <h1 className="text-md sm:text-lg font-semibold">{menu.name}</h1>
                <p className="text-md sm:text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
