// ScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Récupère le hash (par exemple #header)
    if (hash) {
      const element = document.querySelector(hash); // Recherche l'élément correspondant
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scrolle jusqu'à cet élément
      }
    }
  }, [location]); // Déclenche à chaque changement de location (route)

  return null; // Aucun rendu nécessaire
}

export default ScrollToHash;
