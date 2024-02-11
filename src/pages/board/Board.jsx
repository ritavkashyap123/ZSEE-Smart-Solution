import React from "react";
import "./board.scss";

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Board = () => {
  return (
    <div className="Board">
      <img
        src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
        alt=""
        className="header-image"
      />
      <div className="header-text">Board Members</div>
      <div className="container">
        <div className="card_container">
          <div className="card_data">
            <img src="./profile.jpg" alt="" />
            <div className="pro_content">
              <h2>Walter White</h2>
              <p className="position">Chief Executive Officer</p>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social_icons">
                <span>
                  {/* <i className="fa fa-brands fa-twitter" /> */}
                  <FaTwitter className="fa" />
                </span>
                <span>
                  {/* <i className="fa fa-brands fa-facebook" /> */}
                  <FaFacebook className="fa" />
                </span>
                <span>
                  {/* <i className="fa fa-brands fa-youtube" /> */}
                  <FaInstagram className="fa" />
                </span>
                <span>
                  {/* <i className="fa fa-brands fa-instagram" /> */}
                  <FaYoutube className="fa" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
