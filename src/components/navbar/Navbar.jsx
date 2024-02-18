import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoreSections, setShowMoreSections] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleServicesHover = () => {
    setShowMoreSections(true);
  };

  const handleServicesLeave = () => {
    setShowMoreSections(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.2;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${isScrolled ? "scrolled" : ""}`}>
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
          <li className="link">
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li className="link">
            <Link className="a" to="/about">
              About Us
            </Link>
          </li>
          <li className="link" onMouseEnter={handleServicesHover} onMouseLeave={handleServicesLeave}>
            <Link className="a">
              Services
            </Link>
            {showMoreSections && (
              <div className="more-sections">
                <Link className="b" to="/services/section1">Water</Link>
                <Link className="b" to="/services/section2">Solar</Link>
                <Link className="b" to="/services/section3">Lighting</Link>
                <Link className="b" to="/services/section3">SCADA & IoT</Link>
                <Link className="b" to="/services/section3">Consultancy</Link>
                <Link className="b" to="/services/section3">Manufacturing</Link>
              </div>
            )}
          </li>
          <li className="link">
            <Link className="a" to="/timeline">
              Milestone
            </Link>
          </li>
          <li className="link">
            <Link className="a" to="/impact">
              Projects
            </Link>
          </li>
          <li className="link">
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