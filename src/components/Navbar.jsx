import React, { useState } from "react";
import dashifyLogo from "../assets/dashify-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="dashify-logo">
        <img src={dashifyLogo} alt="Dashify" />
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>

      {/* Desktop Buttons */}
      <div className="nav-buttons">
        <button className="login-btn">Log In</button>

        <button className="get-started-btn">
          Get Started
          <span className="arrow">→</span>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-links">
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>

            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>

            <a href="#blog" onClick={() => setMenuOpen(false)}>
              Blog
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </div>

          <div className="mobile-menu-buttons">
            <button className="login-btn">
              Log In
            </button>

            <button className="get-started-btn">
              Get Started
              <span className="arrow">→</span>
            </button>
          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
