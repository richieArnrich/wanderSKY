import React, { useState } from "react";
import "../AdminStyles/AdminHeader.css";
import { Link, NavLink } from "react-router-dom";
function AdminHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navigation">
      <Link to={"/admin"} className="brand">
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
          <NavLink to={"/createPackage"}>Create Package</NavLink>
        </li>
        <li>
          <NavLink to={"/viewPackages"}>View Packages</NavLink>
        </li>
        <li>
          <NavLink to={"/adminLogin"}>Admin Login</NavLink>
        </li>
        <li>
          <NavLink to={"/adminSignup"}>Admin Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AdminHeader;
