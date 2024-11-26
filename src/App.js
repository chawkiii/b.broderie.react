import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

// Import des pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Cart from "./pages/Cart";

// Import des composants principaux
import Nav from "./components/nav/Nav.js";
import Header from "./components/header/Header.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

// Import des functions
import ScrollToHash from "../src/components/functions/ScrollToHash.js";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <Nav />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
