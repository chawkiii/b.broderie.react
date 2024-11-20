import React, { useRef, useEffect } from "react";
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
      "industriel embodery services and products made with a superior quality.",
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
      "Ready to wear, Professionals, or wanna customised wearing, we can satisfy you.",
  },
  {
    src: img4,
    name: "Services",
    description: "We can provide a srvices of embodery, flocage, serigraphy...",
  },
  {
    src: img5,
    name: "TECHNOLOGY",
    description:
      "We are professional with the best tools and machines in the industry.",
  },
  {
    src: img6,
    name: "B2B",
    description: "We are open to partnership.",
  },
];

function Overview() {
  const slideRef = useRef(null);
  const intervalRef = useRef(null); // Référence pour stocker l'intervalle

  const startAutoSlide = () => {
    clearInterval(intervalRef.current); // Assurez-vous qu'aucun intervalle précédent ne tourne
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 10000); // Intervalle de 10 secondes
  };

  const handleNext = () => {
    const slide = slideRef.current;
    if (slide) {
      slide.appendChild(slide.children[0]); // Ajout de la première image à la fin
    }
    startAutoSlide(); // Réinitialise l'intervalle après un défilement manuel
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    if (slide) {
      slide.prepend(slide.children[slide.children.length - 1]); // Ajout de la dernière image au début
    }
    startAutoSlide(); // Réinitialise l'intervalle après un défilement manuel
  };

  // Défilement automatique
  useEffect(() => {
    startAutoSlide(); // Démarre le défilement automatique

    return () => clearInterval(intervalRef.current); // Nettoie l'intervalle lors du démontage
  }, []); // Ajout de 'handleNext' et 'handlePrev' aux dépendances

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
