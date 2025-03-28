import { useState } from "react";
import logo from "/images/logo.svg";
import "./NavBar.css";

const Navbar = ({ navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <button onClick={() => handleNavigation("/")} className="logo-button">
            <img src={logo} alt="logo" className="logo" />
          </button>
        </div>
        <div className="menu-button">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="menu-icon"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={() => handleNavigation("/")} className="nav-link">
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/jobs")}
              className="nav-link"
            >
              Jobs
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/about-us")}
              className="nav-link"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/contact-us")}
              className="nav-link"
            >
              Contact Us
            </button>
          </li>
        </ul>
        <div className="auth-links">
          <button
            onClick={() => handleNavigation("/login")}
            className="auth-link"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation("/register")}
            className="auth-link register"
          >
            Register
          </button>
        </div>
        {isMenuOpen && (
          <ul className="mobile-menu">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="mobile-link"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/jobs")}
                className="mobile-link"
              >
                Jobs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/about-us")}
                className="mobile-link"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/contact-us")}
                className="mobile-link"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/login")}
                className="mobile-link"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/register")}
                className="mobile-link register"
              >
                Register
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
