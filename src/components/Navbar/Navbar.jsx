import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Product",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Shop",
    link: "/#",
  },
  {
    id: 5,
    name: "Contacts",
    link: "/#",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="shadow-lg shadow-red-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center py-4 px-20 md:pt-4"
        >
          {/* Logo Section */}
          <div className="flex items-center text-3xl font-bold ">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">fulCart</p>
            <BiSolidLeaf className="text-green-600" />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4 p-3  text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block px-4 py-1 hover:bg-primary hover:text-white duration-200      rounded-lg font-semibold text-lg font-poppins"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
