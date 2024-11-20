import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
import navLogo from "../../assets/logo/nav-logo.png";

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
            {/* About Dropdown */}
            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(0)}
                aria-expanded={showDropdown === 0}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleDropdown(0)}
              >
                About
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

                    <Link
                      to="/about"
                      className="dropdown__link"
                      onClick={() => setShowMenu(false)}
                    >
                      <span className="dropdown__title"> About</span>
                    </Link>

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
                </div>
              </div>
            </li>

            {/* Shop Dropdown */}
            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(1)}
                aria-expanded={showDropdown === 1}
                role="button"
                tabIndex={1}
                onKeyDown={(e) => e.key === "Enter" && toggleDropdown(1)}
              >
                Shop
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
                    <Link
                      to="/shop#ready-to-wear"
                      className="dropdown__link"
                      onClick={() => setShowMenu(false)}
                    >
                      <span className="dropdown__title">Shop</span>
                    </Link>
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
                      <li>
                        <Link
                          to="/shop#professional"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Professional wear
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
                onClick={() => toggleDropdown(2)}
                aria-expanded={showDropdown === 2}
                role="button"
                tabIndex={2}
                onKeyDown={(e) => e.key === "Enter" && toggleDropdown(2)}
              >
                Services
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    showDropdown === 2 ? "rotate" : ""
                  }`}
                ></i>
              </div>
              <div
                className={`dropdown__container ${
                  showDropdown === 2 ? "show-dropdown" : ""
                }`}
              >
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-tools-line"></i>
                    </div>

                    <ul className="dropdown__list">
                      <Link
                        to="/services"
                        className="dropdown__link"
                        onClick={() => setShowMenu(false)}
                      >
                        <span className="dropdown__title"> Services</span>
                      </Link>
                      <li>
                        <Link
                          to="/services#broderie"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Embroidery
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
                      <li>
                        <Link
                          to="/services#flocage"
                          className="dropdown__link"
                          onClick={() => setShowMenu(false)}
                        >
                          Flocage
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
