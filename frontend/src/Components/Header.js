import React, { useState } from "react";
import "../../src/styles/Header.css";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navigation">
      <Link to={"/"} className="brand">
        Wander <span>SKY</span>
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/packages"}>Packages</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/signup"}>Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
