import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import navLogo from "../../assets/nav-logo.png";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setShowDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleResize = () => {
    if (window.innerWidth >= 1118) {
      setShowDropdown(null);
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown__item")) {
      setShowDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link to="/" className="nav__logo">
            <img src={navLogo} alt="Logo" />
          </Link>
          <div
            className="nav__toggle"
            onClick={() => setShowMenu(!showMenu)}
            id="nav-toggle"
          >
            <i
              className={`ri-menu-line nav__toggle-menu ${
                showMenu ? "hide-icon" : "show-icon"
              }`}
            ></i>
            <i
              className={`ri-close-line nav__toggle-close ${
                showMenu ? "show-icon" : "hide-icon"
              }`}
            ></i>
          </div>
        </div>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {/* Home Dropdown */}
            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(0)}
                aria-expanded={showDropdown === 0}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleDropdown(0)}
              >
                Home
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    showDropdown === 0 ? "rotate" : ""
                  }`}
                ></i>
              </div>
              <div
                className={`dropdown__container ${
                  showDropdown === 0 ? "show-dropdown" : ""
                }`}
              >
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-home-smile-line"></i>
                    </div>
                    <span className="dropdown__title">About</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/about"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Who we are?
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about#what-we-do"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          What we do?
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-contacts-book-line"></i>
                    </div>
                    <span className="dropdown__title">Contact</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/about#socials"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Socials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about#maps"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Maps
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(1)}
                aria-expanded={showDropdown === 1}
                role="button"
                tabIndex={1}
                onKeyDown={(e) => e.key === "Enter" && toggleDropdown(1)}
              >
                Services
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    showDropdown === 1 ? "rotate" : ""
                  }`}
                ></i>
              </div>
              <div
                className={`dropdown__container ${
                  showDropdown === 1 ? "show-dropdown" : ""
                }`}
              >
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-shopping-cart-line"></i>
                    </div>
                    <span className="dropdown__title">Shop</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/shop#ready-to-wear"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Ready to wear
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop#custom-wear"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Custom wear
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-hand-coin-line"></i>
                    </div>
                    <span className="dropdown__title">B2B Partnership</span>
                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/services#broderie"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Broderie
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services#confection"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Confection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Cart Link */}
            <li>
              <Link
                to="/cart"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Cart
              </Link>
            </li>

            {/* Language Selector */}
            <li>
              <Link
                to="/language"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Langue
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;