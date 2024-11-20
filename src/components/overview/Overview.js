import React, { useRef, useEffect, useCallback } from "react";
import "../../styles/overview.css";

import img1 from "../../assets/overview/1.jpg";
import img2 from "../../assets/overview/2.jpg";
import img3 from "../../assets/overview/3.jpg";
import img4 from "../../assets/overview/4.jpg";
import img5 from "../../assets/overview/5.jpg";
import img6 from "../../assets/overview/6.jpg";

const images = [
  {
    src: img1,
    name: "Embodery",
    description:
      "Industriel embroidery services and products made with superior quality.",
  },
  {
    src: img2,
    name: "Confection",
    description: "Transforming ideas into realities with creativity.",
  },
  {
    src: img3,
    name: "Shop",
    description:
      "Ready to wear, professionals, or want customized wear, we can satisfy you.",
  },
  {
    src: img4,
    name: "Services",
    description:
      "We can provide services such as embroidery, flocage, serigraphy...",
  },
  {
    src: img5,
    name: "TECHNOLOGY",
    description:
      "We are professionals with the best tools and machines in the industry.",
  },
  {
    src: img6,
    name: "B2B",
    description: "We are open to partnerships.",
  },
];

function Overview() {
  const slideRef = useRef(null);
  const intervalRef = useRef(null); // Reference for storing the interval

  // Memorize the startAutoSlide function
  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current); // Ensure no previous interval is running
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 10000); // Interval of 10 seconds
  }, []);

  // Memorize the handleNext function
  const handleNext = useCallback(() => {
    const slide = slideRef.current;
    if (slide) {
      slide.appendChild(slide.children[0]); // Add the first image to the end
    }
    startAutoSlide(); // Reset the interval after a manual slide
  }, [startAutoSlide]);

  // Memorize the handlePrev function
  const handlePrev = useCallback(() => {
    const slide = slideRef.current;
    if (slide) {
      slide.prepend(slide.children[slide.children.length - 1]); // Add the last image to the start
    }
    startAutoSlide(); // Reset the interval after a manual slide
  }, [startAutoSlide]);

  // Automatic slide
  useEffect(() => {
    startAutoSlide(); // Start the automatic slide

    return () => clearInterval(intervalRef.current); // Clean up the interval on unmount
  }, [startAutoSlide]); // Only run this effect when startAutoSlide changes

  return (
    <section className="overview">
      <div className="spartas">
        <h2>Overview</h2>
        <p>
          We do a lot of things... you can see these images as examples or take
          a closer look at them ;)
        </p>
      </div>

      <div className="slider_container">
        <div id="slide" ref={slideRef}>
          {images.map((img, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${img.src})` }}
            >
              <div className="content">
                <div className="name">{img.name}</div>
                <div className="description">{img.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
