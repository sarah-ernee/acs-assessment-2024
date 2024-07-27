import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">AEON</div>
      <ul>
        <li>
          <a href="/">Showcase</a>
        </li>
        <li>
          <a href="/">Docs</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Analytics</a>
        </li>
        <li>
          <a href="/">Templates</a>
        </li>
        <li>
          <a href="/">Enterprise</a>
        </li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search documentation..." />
      </div>
    </nav>
  );
};

export default Navbar;
