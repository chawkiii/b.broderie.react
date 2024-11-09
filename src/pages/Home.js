import React from "react";
import "../styles/home.css";
import welcome from "../assets/welcome.png";
import About from "../pages/About";
import Contact from "../components/contact/Contact";

function Home() {
  return (
    <>
      <section>
        <h1 className="home_header">
          <img src={welcome} alt="welcomme " />
          to
          <br />
          B.broderie & confection
        </h1>
        <About />
        <Contact />
      </section>
    </>
  );
}

export default Home;
