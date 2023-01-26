import React from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import clasess from "./Contacto.module.scss";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; // eslint-disable-line

const Contacto = () => {
  const lng = -117.1206;
  const lat = 32.52046;

  return (
    <div className={clasess.container} id="#contacto">
      <h2>Contacto</h2>
      <div className={clasess["container-box"]}>
        <div className={clasess["container-box__map"]}>
          <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: 13,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{ width: "85%", height: "500px", borderRadius: "15px" }}
          >
            <Marker longitude={lng} latitude={lat} color="black"></Marker>
            <NavigationControl position="bottom-right" />
            <GeolocateControl />
          </Map>
        </div>
        <div className={clasess["container-box__text"]}>
          <div className={clasess["container-box__text--card"]}>
            <h4>Ubicación</h4>
            <span>Parque Azteca Nte 294, Playas de Tijuana</span>
            <span>Tijuana, B.C. México.</span>
          </div>
          <div className={clasess["container-box__text--card"]}>
            <h4>Horario</h4>
            <span>4pm - 12am</span>
            <span>Miércoles Cerrado</span>
          </div>
          <div className={clasess["container-box__text--card"]}>
            <h4>Contacto</h4>
            <span>Sanmiguelplayas@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
