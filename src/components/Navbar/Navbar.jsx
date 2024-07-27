import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Clear event listeners on rerender
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Hide search bar first
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const renderNavItems = () => (
    <>
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
      {!isMobile && (
        <div className="search-bar">
          <input type="text" placeholder="Search documentation..." />
        </div>
      )}
    </>
  );

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="title">AEON</div>
        {isMobile && (
          <div className="mobile-icons">
            {/* Only show hamburger icon if mobile navbar not expanded */}
            {!isOpen && <Menu size={24} onClick={toggleMenu} />}

            {/* Show icons once mobile navbar expanded */}
            {isOpen && (
              <>
                {isSearchOpen ? (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="mobile-search-input"
                  />
                ) : (
                  <Search size={20} onClick={toggleSearch} />
                )}
                <X size={24} onClick={toggleMenu} />
              </>
            )}
          </div>
        )}
      </div>

      {/* Outright render ul items if in laptop view */}
      {/* Render ul items if mobile and expanded */}
      {!isMobile || isOpen ? renderNavItems() : null}
    </nav>
  );
};

export default Navbar;
