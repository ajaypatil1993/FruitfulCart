import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "../src/components/Banner/Banner";
import Banner2 from "../src/components/Banner/Banner2";
import Banner3 from "../src/components/Banner/Banner3";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
