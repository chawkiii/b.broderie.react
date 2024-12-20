import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import fbIcon from "../../assets/icons/icons8-facebook-48.png";
import instaIcon from "../../assets/icons/icons8-instagram-48.png";
import whatsappIcon from "../../assets/icons/icons8-whatsapp-48.png";
import githubIcon from "../../assets/icons/icons8-github-64.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-Container">
          {/* Informations de contact */}
          <div className="footer-info">
            <p>123 Example Street, City, Country</p>
            <p>Email: contact@bbroderie.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Menu principal */}
          <div className="footer-links">
            <h3>Home</h3>

            <ul>
              <li>
                <Link to="/#header" title="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#overview" title="Overview">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/#contact" title="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-links">
            <h3>About</h3>

            <ul>
              <li>
                <Link to="/about#header" title="About">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about#about" title="who we are ?">
                  who we are ?
                </Link>
              </li>
              <li>
                <Link to="/about#contact" title="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories de Shop */}
          <div className="footer-category">
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="shop.html#shipping" title="Shipping Info">
                  On vous livre
                </a>
              </li>
              <li>
                <a href="shop.html#order" title="Place an Order">
                  Commandez !
                </a>
              </li>
              <li>
                <a href="shop.html#discover" title="Discover Our Products">
                  Découvrez...
                </a>
              </li>
            </ul>
          </div>

          {/* Catégories de B2B */}
          <div className="footer-category">
            <h3>B2B</h3>
            <ul>
              <li>
                <a
                  href="b2b.html#partnership"
                  title="Partnership Opportunities"
                >
                  Partenariat
                </a>
              </li>
              <li>
                <a href="b2b.html#trust" title="Trust and Reliability">
                  Confiance
                </a>
              </li>
              <li>
                <a href="b2b.html#quality" title="Quality Services">
                  Qualité
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux et autres liens */}
          <div className="footer-social-container">
            <h3>Connect with Us</h3>
            <div className="footer-social"></div>
            <a href="https://facebook.com" title="Facebook">
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" title="Instagram">
              <img src={instaIcon} alt="Instagram" />
            </a>
            <a href="https://wa.me/tonnumero" title="WhatsApp">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href="https://github.com/toncompte" title="GitHub">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>&copy; 2024 B.broderie et confection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
