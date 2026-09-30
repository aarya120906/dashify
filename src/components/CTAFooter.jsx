import React from "react";
import "./CTAFooter.css";

function CTAFooter() {
  return (
    <footer className="cta-footer">

      {/* Background grid */}
      <div className="footer-grid"></div>

      {/* =====================================
          CTA CARD
      ====================================== */}
      <div className="cta-card">

        <div className="cta-content">
          <h2>Ready to get started?</h2>

          <p>
            Take the first step to growing your business
          </p>
        </div>

        <button className="cta-button">
          Get Started
        </button>

      </div>


      {/* =====================================
          FOOTER MAIN
      ====================================== */}
      <div className="footer-main">

        {/* LOGO */}
        <div className="footer-brand">

          <div className="footer-logo-mark">
            <span className="logo-vertical"></span>
            <span className="logo-horizontal"></span>
          </div>

          <div className="footer-logo-text">
            <span className="dashify-purple">D</span>
            <span>ashify</span>
          </div>

        </div>


        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-link-row">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-link-row footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER
      ====================================== */}
      <div className="footer-bottom">

        <p>
          © 2025 Dashify. All rights reserved.
        </p>

        <div className="social-links">
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#youtube">YouTube</a>
        </div>

      </div>

    </footer>
  );
}

export default CTAFooter;