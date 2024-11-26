import React, { useState } from "react";
import welcome from "../../assets/header/welcome.png";
import "../../styles/header.css";

function Header() {
  const [showLangMenu, setShowLangMenu] = useState(false);

  const toggleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
    // Implémentez ici la logique pour changer la langue (par exemple, mise à jour d'un contexte ou appel d'une fonction)
    setShowLangMenu(false);
  };

  return (
    <header id="header" className="header-container">
      <h1 className="home_header">
        <img src={welcome} alt="Welcome" />
        to
        <br />
        B.broderie & Confection
      </h1>
      <button
        className="lang-toggle-btn"
        onClick={toggleLangMenu}
        aria-label="Change language"
      >
        <i className="ri-global-line"></i>
      </button>

      {showLangMenu && (
        <div className="lang-dropdown">
          <ul>
            <li onClick={() => handleLanguageChange("fr")}>Français</li>
            <li onClick={() => handleLanguageChange("en")}>English</li>
            <li onClick={() => handleLanguageChange("ar")}>Arabe</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
