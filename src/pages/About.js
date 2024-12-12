import React from "react";
import "../styles/about.css";
import Contact from "../components/contact/Contact";

function About() {
  return (
    <section id="about" className="about_section">
      <svg
        className="svg-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="#ffe4c4"
          fillOpacity="1"
          d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <h2>About Us</h2>
      <div className="about-text">
        <p>
          Founded 5-6 years ago, B.broderie et confection started as a small
          business focused on delivering high-quality embroidery services. Over
          the years, we've expanded our offerings to include a wide range of
          confection services, catering to both individual customers and
          businesses.
        </p>
        <p>
          Located in Algeria, our skilled team is passionate about bringing your
          unique visions to life. We take pride in our craftsmanship and
          attention to detail, ensuring every piece we create meets the highest
          standards of quality.
        </p>
        <p>
          Our mission is to provide exceptional service and create lasting
          relationships with our clients. Whether you're looking for custom
          embroidery, ready-to-wear garments, or a reliable partner for
          large-scale projects, B.broderie et confection is here to help you
          achieve your goals.
        </p>
        <p>
          Discover the story behind our brand and join us in celebrating the art
          of embroidery and confection.
        </p>
      </div>
      <svg
        className="svg-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
      >
        <path
          fill="#ffe4c4"
          fillOpacity="1"
          d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}

export default About;
