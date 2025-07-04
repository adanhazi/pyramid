import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Pyramid Logo" style={{ height: 44, marginRight: 8 }} />
        <span style={{ fontWeight: 700, fontSize: "1.3rem" }}>PYRAMID RESEARCH & CONSULTANCY GROUP</span>
      </div>
      <button className="navbar-hamburger" onClick={() => setOpen(o => !o)}>
        ☰
      </button>
      <div className={`navbar-links${open ? " open" : ""}`}>
        <Link to="/" className={pathname === "/" ? "active" : ""} onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className={pathname === "/about" ? "active" : ""} onClick={handleLinkClick}>About</Link>
        <Link to="/services" className={pathname === "/services" ? "active" : ""} onClick={handleLinkClick}>Services</Link>
        <Link to="/contact" className={pathname === "/contact" ? "active" : ""} onClick={handleLinkClick}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;