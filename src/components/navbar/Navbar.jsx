import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoreSections, setShowMoreSections] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleServicesHover = () => {
    setShowMoreSections(true);
  };

  const handleServicesLeave = () => {
    setShowMoreSections(false);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`Navbar ${isHomePage && isScrolled ? "scrolled" : ""}`}
      style={{
        background: isHomePage
          ? isScrolled
            ? "#007a69"
            : "transparent"
          : "#007a69",
      }}
    >
      <div className="navbar-div">
        <Link to="/" className="logo">
          <img src={logo} alt="" width={60} />
          ZSEE Smart Solution <br />
          India Private Limited
        </Link>
        <div className="hamburger" onClick={toggleNav}>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
          <div className={`line ${isNavOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`links ${isNavOpen ? "open" : ""}`}>
          <li className="link" onClick={closeNav}>
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li className="link">
            <Link className="a" to="/about" onClick={closeNav}>
              About Us
            </Link>
          </li>
          <li
            className="link"
            onMouseEnter={handleServicesHover}
            onMouseLeave={handleServicesLeave}
          >
            <Link className="a">
              Services <FaAngleDown className="arrow" />
            </Link>
            {showMoreSections && (
              <div className="more-sections">
                <Link className="b" to="/services/water" onClick={closeNav}>
                  Water
                </Link>
                <Link className="b" to="/services/solar" onClick={closeNav}>
                  Solar
                </Link>
                <Link className="b" to="/services/lightning" onClick={closeNav}>
                  Lighting
                </Link>
                <Link className="b" to="/services/scada-iot" onClick={closeNav}>
                  SCADA & IoT
                </Link>
                <Link
                  className="b"
                  to="/services/consultancy"
                  onClick={closeNav}
                >
                  Consultancy
                </Link>
                <Link
                  className="b"
                  to="/services/manufacturing"
                  onClick={closeNav}
                >
                  Manufacturing
                </Link>
              </div>
            )}
          </li>
          <li className="link" onClick={closeNav}>
            <Link className="a" to="/milestone">
              Milestone
            </Link>
          </li>
          <li className="link" onClick={closeNav}>
            <Link className="a" to="/project">
              Projects
            </Link>
          </li>
          <li className="link" onClick={closeNav}>
            <Link className="a" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
