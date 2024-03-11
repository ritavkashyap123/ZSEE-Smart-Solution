import React from "react";

const PopupCard = (props) => {
  return (
    <div className="PopupCard">
      <img src={props.link}alt="" style={{
        width: "100%",
        height: 100,
        objectFit: "cover",

      }} />
      <h3 style={{fontSize: 16}}>{props.title}</h3>
      <p style={{fontSize: 10}}>{props.details}</p>
    </div>
  );
};

export default PopupCard;
