import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 26.1825571;
  const longitude = 91.7433225;
  const markerPosition = [latitude, longitude]; 

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
    //   style={{ width: "30vw", height: "30vh", zIndex: 2 }}
    className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition}>
      </Marker>
    </MapContainer>
  );
};

export default Map;
