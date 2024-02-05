import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/" className="Card border-top-blue">
      <img src="images/card-img1.png" alt="" />
      <h2>WordPress Website</h2>
      <p>
        Providing custom, user-friendly and visually appealing websites for
        businesses and individuals.
      </p>
      <br />
      <div className="explore-btn">
        <Link to="/">
          Explore <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};

export default Card;
