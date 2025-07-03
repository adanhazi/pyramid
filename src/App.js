import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Hero />
      <section className="section">
        <div className="max-width">
          <About />
        </div>
      </section>
      <section className="section blue-bg">
        <div className="max-width">
          <Pillars />
        </div>
      </section>
      <section className="section">
        <div className="max-width">
          <Services />
        </div>
      </section>
      <section className="section dark-bg">
        <div className="max-width">
          <WhyUs />
        </div>
      </section>
      <section className="section">
        <div className="max-width">
          <Partners />
        </div>
      </section>
      <section className="section blue-bg">
        <div className="max-width">
          <Contact />
        </div>
      </section>
      <footer>
        Registered in Kenya, Company No. PVT-8LU2RXXV, PIN: P052352157A
        <br />
        &copy; 2024 Pyramid Research & Consultancy Group Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
