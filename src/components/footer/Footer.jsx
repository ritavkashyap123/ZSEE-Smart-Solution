import React from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="row-1">
          <div className="box">
            <h4 className="title">Company</h4>
            <ul className="list">
              <li className="item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="item">
                <Link to="/about" className="link">
                  About us
                </Link>
              </li>
              <li className="item">
                <Link to="/timeline" className="link">
                  Timeline
                </Link>
              </li>
              <li className="item">
                <Link to="/impact" className="link">
                  Impact
                </Link>
              </li>
              <li className="item">
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4 className="title">Offices</h4>
            <ul className="list">
              <li className="item">
                <Link to="#" className="link">
                  Accra
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Kumasi
                </Link>
              </li>
              <li className="#item">
                <Link to="" className="link">
                  Takoradi
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Kasoa
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="box">
          <label htmlFor="language" className="title">
            Language
          </label>
          <select name="language" id="language" className="dropdown">
            <option className="dropdown-item">English</option>
            <option className="dropdown-item">French</option>
            <option className="dropdown-item">Spanish</option>
            <option className="dropdown-item">Arabic</option>
          </select>
        </div> */}
          <div className="box">
            <h4 className="title">Offices</h4>
            <ul className="list">
              <li className="item">
                <Link to="#" className="link">
                  Accra
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Kumasi
                </Link>
              </li>
              <li className="#item">
                <Link to="" className="link">
                  Takoradi
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Kasoa
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4 className="title">Support</h4>
            <ul className="list">
              <li className="item">
                <Link to="#" className="link">
                  Get Help
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  FAQs
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Privacy Policy
                </Link>
              </li>
              <li className="item">
                <Link to="#" className="link">
                  Terms of Operation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-2 u-margin-top-small">
          <p className="copyright">© 2024 ZSEE. All Rights Reserved.</p>
          <div className="social-icons-box">
            <Link to="#" className="social-link">
              <FaFacebook className="icon" />
            </Link>
            <Link to="#" className="social-link">
              <FaInstagram className="icon" />
            </Link>
            <Link to="#" className="social-link">
              <FaLinkedin className="icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row-3 u-margin-top-small">
        <p className="developer-text">
          Made with 🤍 &amp;&amp; 🔥 by Gigcrafters
        </p>
      </div>
    </>
  );
};

export default Footer;
