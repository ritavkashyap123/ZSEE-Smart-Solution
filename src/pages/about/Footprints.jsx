import React, { useState, useEffect, useRef } from "react";
import "./about.scss";
import PopupCard from "../../components/map/PopupCard";
import Map from "../../components/map/Map";

const Footprints = () => {
  // const mapRef = useRef(null);
  // const latitude = 24.5937;
  // const longitude = 78.9629;
  // const markerPosition1 = ["34.5539", "76.1349"];
  // const markerPosition2 = ["28.2180", "94.7278"];
  // const markerPosition3 = [latitude, longitude];
  // const markerPosition4 = [latitude, longitude];
  // const [popupOpen1, setPopupOpen1] = useState(false);
  // const [popupOpen2, setPopupOpen2] = useState(false);

  // const togglePopup1 = () => {
  //   setPopupOpen1(!popupOpen1);
  // };
  // const togglePopup2 = () => {
  //   setPopupOpen2(!popupOpen2);
  // };

  return (
    <div className="Footprints">
      <h3 className="heading-tertiary u-margin-bottom-small">Footprints</h3>
      <h3 className="paragraph u-margin-bottom-small">
        The positive changes we've brought to society.
      </h3>
      <div className="footmap">
        <Map />
        {/* <img src="/India-Map.jpg" alt="" width="100%" height="60%" /> */}
        {/* <MapContainer
          center={["24.5937", "78.9629"]}
          zoom={5}
          ref={mapRef}
          style={{ width: "90vw", height: "70vh", zIndex: 2 }}
          //   className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerPosition1}>
            <Popup onClose={togglePopup1} open={popupOpen1}>
              <PopupCard
                link="/mav.jpg"
                title="Kargil Project"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum atque quasi animi repudiandae rem, saepe optio ea omnis facilis."
              />
            </Popup>
          </Marker>
          <Marker position={markerPosition2}>
            <Popup onClose={togglePopup2} open={popupOpen2}>
              <PopupCard
                link="/mav.jpg"
                title="Arunachal Project"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum atque quasi animi repudiandae rem, saepe optio ea omnis facilis."
              />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="footmap-mobile">
        <MapContainer
          center={["24.5937", "82.9629"]}
          zoom={4}
          ref={mapRef}
          style={{ width: "90vw", height: "70vh", zIndex: 2 }}
          //   className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerPosition1}>
            <Popup onClose={togglePopup1} open={popupOpen1}>
              <PopupCard
                link="/mav.jpg"
                title="Kargil Project"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum atque quasi animi repudiandae rem, saepe optio ea omnis facilis."
              />
            </Popup>
          </Marker>
          <Marker position={markerPosition2}>
            <Popup onClose={togglePopup2} open={popupOpen2}>
              <PopupCard
                link="/mav.jpg"
                title="Arunachal Project"
                details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum atque quasi animi repudiandae rem, saepe optio ea omnis facilis."
              />
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    </div>
  );
};

export default Footprints;
