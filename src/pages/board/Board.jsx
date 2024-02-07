import React from "react";
import "./board.scss";

const Board = () => {
  return (
    <div className="Board">
      <img
        src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
        alt=""
        className="header-image"
      />
      <div className="header-text">Board Members</div>
    </div>
  );
};

export default Board;
