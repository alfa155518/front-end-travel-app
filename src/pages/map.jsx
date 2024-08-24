/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapBox({ tourLocations }) {
  mapboxgl.accessToken = import.meta.env.VITE_API_URL_MAPBOX_TOKEN;
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  let { images, startLocation, locations } = tourLocations;
  useEffect(() => {
    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: startLocation.coordinates,
      zoom: 2,
    });

    // Add zoom-in effect when the map loads
    mapRef.current.on("load", () => {
      mapRef.current.flyTo({
        center: startLocation.coordinates,
        zoom: 5, // Target zoom level
        speed: 0.8, // Make the flying slower
        curve: 1, // Change the speed curve
      });

      // Add markers to the map
      locations.forEach((location) => {
        new mapboxgl.Marker({ color: "#ff7e01" })
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3><span>Day: ${location.day}</span>  ${location.description}</h3>`
            )
          ) // Popup with location name
          .addTo(mapRef.current);
      });
    });

    // Clean up on unmount
    return () => mapRef.current.remove();
  }, []);

  const changeMapStyle = (newStyle) => {
    if (mapRef.current) {
      mapRef.current.setStyle(newStyle);
    }
  };

  images = import.meta.glob("../images/tours/*.webp", { eager: true });

  return (
    <>
      <div className="tour-images flex items-center gap-1">
        {tourLocations.images.map((imgName, i) => {
          // Construct the path using the imported image keys
          const imgPath = images[`../images/tours/${imgName}`]?.default;

          if (!imgPath) {
            return <div key={i}>Image not found</div>;
          }

          return (
            <div key={i} className="tour-img">
              <img src={imgPath} alt={`tour-img-${i}`} className="w-[100%]" />
            </div>
          );
        })}
      </div>
      <div className="map-box" ref={mapContainerRef} />
      {/* Buttons to change map style */}
      <div className="style-map flex items-start justify-center flex-wrap mt-3">
        <button
          className="bounce-btn animate__animated animate"
          onClick={() => changeMapStyle("mapbox://styles/mapbox/streets-v11")}>
          Streets
        </button>
        <button
          className="bounce-btn animate__animated animate"
          onClick={() => changeMapStyle("mapbox://styles/mapbox/outdoors-v11")}>
          Outdoors
        </button>
        <button
          className="bounce-btn animate__animated animate"
          onClick={() => changeMapStyle("mapbox://styles/mapbox/light-v10")}>
          Light
        </button>
        <button
          className="bounce-btn animate__animated animate"
          onClick={() => changeMapStyle("mapbox://styles/mapbox/dark-v10")}>
          Dark
        </button>
        <button
          className="bounce-btn animate__animated animate"
          onClick={() =>
            changeMapStyle("mapbox://styles/mapbox/satellite-streets-v11")
          }>
          Satellite Streets
        </button>
      </div>
    </>
  );
}

export default MapBox;
