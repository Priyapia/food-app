import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      padding: isActive ? "20px" : "20px",
    };
  };
  return (
    <nav style={{ backgroundColor: "red", padding: "16px 32px" }}>
      {/* <div className="link">
        <Link to="/">Routing</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div> */}

      <NavLink to="/" style={navLinkStyles}>
        Routing
      </NavLink>
      <NavLink to="/home" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/product" style={navLinkStyles}>
        Product
      </NavLink>
    </nav>
  );
}

export default Navbar;
