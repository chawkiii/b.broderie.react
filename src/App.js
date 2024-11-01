import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Nav from "./nav/Nav.js";
import Home from "./home/Home.js";
import Services from "./services/Services.js";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Services />} />
        <Route path="/projects" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
