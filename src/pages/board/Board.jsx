import React from "react";
import "./board.scss";
import { Link } from "react-router-dom";

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import BoardContent from "./BoardContent";

const Board = () => {
  const { chairPerson, boardMembers } = BoardContent();

  return (
    <div className="Board">
      <img
        src="/marwa 44.JPG"
        alt=""
        className="header-image"
      />
      <div className="header-text">Board Members</div>
      <div className="container">
        <h1 className="head">Chairperson</h1> 
        <div className="card_container">
          {chairPerson.map((chair, index) => (
            <div className="card_data" key={index}>
              <img src={chair.image} alt="" />
              <div className="pro_content">
                <h2>{chair.title}</h2>
                <p className="position">{chair.position}</p>
                <p>{chair.description}</p>
                <div className="social_icons">
                  
                  <Link to={chair.tweeterlink} className="span">
                    <FaTwitter className="fa" />
                  </Link>
                  <Link to={chair.fblink} className="span">
                    <FaFacebook className="fa" />
                  </Link>
                  <Link to={chair.instalink} className="span">
                    <FaInstagram className="fa" />
                  </Link>
                  <Link to={chair.ytlink} className="span">
                    <FaYoutube className="fa" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="head">Board Members</h1>
        <div className="card_container">
          {boardMembers.map((board, index) => (
            <div className="card_data" key={index}>
              <img src={board.image} alt="" />
              <div className="pro_content">
                <h2>{board.title}</h2>
                <p className="position">{board.position}</p>
                <p>{board.description}</p>
                <div className="social_icons">
                  <Link to={board.tweeterlink} className="span">
                    <FaTwitter className="fa" />
                  </Link>
                  <Link to={board.fblink} className="span">
                    <FaFacebook className="fa" />
                  </Link>
                  <Link to={board.instalink} className="span">
                    <FaInstagram className="fa" />
                  </Link>
                  <Link to={board.ytlink} className="span">
                    <FaYoutube className="fa" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
