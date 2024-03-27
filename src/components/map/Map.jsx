import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PopupCard from "./PopupCard";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = ({ zoom }) => {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/ritavkashyap/clu8mq52t00y801mjdzhb02uw",
      center: [83.329, 22.512],
      zoom: zoom,
      scrollZoom: false,
      doubleClickZoom: false 
    });

    const markerData = [
      {
        lngLat: [91.7417, 26.1757],
        title: "Assam",
        details: "Details 1",
        link: "/mav.jpg",
      },
      {
        lngLat: [95.8143, 28.2695],
        title: "Arunachal Pradesh",
        details: "Details 2",
        link: "/mav.jpg",
      },
      {
        lngLat: [75.9463, 34.5292],
        title: "UT Ladakh",
        details: "Details 3",
        link: "/mav.jpg",
      },
      {
        lngLat: [91.7344, 25.3447],
        title: "Meghalaya",
        details: "Details 3",
        link: "/mav.jpg",
      },
      {
        lngLat: [76.2103, 10.2189],
        title: "Kerela",
        details: "Details 3",
        link: "/mav.jpg",
      },
    ];

    markerData.forEach((markerInfo) => {
      const marker = new mapboxgl.Marker({ cursor: 'pointer' })
        .setLngLat(markerInfo.lngLat)
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        if (markerRef.current) {
          markerRef.current.getPopup().remove();
        }

        const popupContent = `
        <div style="width: 200px">
          <img src=${markerInfo.link} alt="" style="width: 100%; height: 100px; object-fit: cover;" />
          <h3 style="font-size: 16px;">${markerInfo.title}</h3>
          <p style="font-size: 10px;">${markerInfo.details}</p>
        </div>
      `;

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(popupContent)
          .addTo(map);

        marker.setPopup(popup);
        markerRef.current = marker;
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "80vh" }} />
  );
};

export default Map;
