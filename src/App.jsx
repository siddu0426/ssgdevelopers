import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-secondary font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />    
    </div>

  );
};

export default App;