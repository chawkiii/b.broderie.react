import React from "react";
import "../styles/home.css";
import welcome from "../assets/welcome.png";
import About from "../about/About";
import Contact from "../contact/Contact";

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
