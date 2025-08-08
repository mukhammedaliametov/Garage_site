import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Brands />
        <Services />
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default App;
