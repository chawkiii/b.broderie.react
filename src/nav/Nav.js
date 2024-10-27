import React, { useState } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a className="nav__logo">Logo</a>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i
              className={`ri-menu-line nav__toggle-menu ${
                isMenuVisible ? "hide" : ""
              }`}
            ></i>
            <i
              className={`ri-close-line nav__toggle-close ${
                isMenuVisible ? "" : "hide"
              }`}
            ></i>
          </div>
        </div>

        <div className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}>
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
              >
                Services{" "}
                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <div
                className={`dropdown__container ${
                  activeDropdown === 0 ? "show-dropdown" : ""
                }`}
              >
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i className="ri-flashlight-line"></i>
                    </div>
                    <span className="dropdown__title">Shop</span>
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
