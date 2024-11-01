import React, { useState, useEffect } from "react";
import "../styles/nav.css";

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a className="nav__logo">Logo</a>
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
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(0)}
                aria-expanded={showDropdown === 0}
                role="button"
                tabIndex={0}
              >
                Services{" "}
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
                      <i className="ri-flashlight-line"></i>
                    </div>
                    <span className="dropdown__title">shop</span>
                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Ready to wear
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Custom wear
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-shield-line"></i>
                    </div>
                    <span className="dropdown__title">B2B Partnership</span>
                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Broderie
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Confection
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
