import React, { useState, useEffect, useRef } from "react";
import "./about.scss";
import PopupCard from "../../components/map/PopupCard";
import Map from "../../components/map/Map";

const Footprints = () => {

  return (
    <div className="Footprints">
      <h3 className="heading-tertiary u-margin-bottom-small">Footprints</h3>
      <h3 className="paragraph u-margin-bottom-small">
        The positive changes we've brought to society.
      </h3>
      <div className="footmap">
        <Map zoom={4.2} />
      </div>
      <div className="footmap-mobile">
        <Map zoom={3} />
      </div>
    </div>
  );
};

export default Footprints;
