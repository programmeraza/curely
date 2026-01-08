import React, { useState } from "react";
import "./Header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Features" },
    { path: "/services", label: "Screenshots" },
    { path: "/price", label: "Pricing" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <img src="./logo.png" alt="logo" className="header__logo" />

          {/* NAV DESKTOP */}
          <div className="header__nav">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="header__flex-btn">
            {/* BUTTON DESKTOP */}
            <button className="header__btn">
              Download App
              <div className="header__svg">
                <svg width="12" height="9" viewBox="0 0 12 9">
                  <path
                    d="M10.6667 4.47133L11.138 4L11.6094 4.47133L11.138 4.94267L10.6667 4.47133ZM0.666708 5.138C0.489898 5.138 0.320328 5.06776 0.195303 4.94274C0.0702791 4.81771 4.19617e-05 4.64814 4.19617e-05 4.47133C4.19617e-05 4.29452 0.0702791 4.12495 0.195303 3.99993C0.320328 3.8749 0.489898 3.80467 0.666708 3.80467V5.138ZM7.13804 0L11.138 4L10.1954 4.94267L6.19537 0.942666L7.13804 0ZM11.138 4.94267L7.13804 8.94267L6.19537 8L10.1954 4L11.138 4.94267ZM10.6667 5.138H0.666708V3.80467H10.6667V5.138Z"
                    fill="#151419"
                  />
                </svg>
              </div>
            </button>

            {/* BURGER */}
            <div
              className={`header__burger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </div>
            <div className={`header__mobile ${menuOpen ? "open" : ""}`}>
              <nav>
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
