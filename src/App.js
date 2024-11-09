import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

// Import des composants principaux
import Nav from "./components/nav/Nav.js";
import Footer from "./components/footer/Footer.js";
import LanguageSelector from "./components/langueSelector/LanguageSelector.js";

// Import des pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      {/* Navigation présente sur toutes les pages */}
      <Nav />

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Sélecteur de langue et footer communs */}
      <LanguageSelector />
      <Footer />
    </Router>
  );
};

export default App;
