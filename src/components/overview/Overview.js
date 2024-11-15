import React, { useRef } from "react";
import "../../styles/overview.css";

import img1 from "../../assets/overview/1.jpg";
import img2 from "../../assets/overview/2.jpg";
import img3 from "../../assets/overview/3.jpg";
import img4 from "../../assets/overview/4.jpg";
import img5 from "../../assets/overview/5.jpg";
import img6 from "../../assets/overview/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function Overview() {
  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    slide.appendChild(slide.children[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    slide.prepend(slide.children[slide.children.length - 1]);
  };

  return (
    <section className="overview">
      <div className="spartas">
        <h3>Overview</h3>
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
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="description">
                  Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat
                  tieu
                </div>
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
