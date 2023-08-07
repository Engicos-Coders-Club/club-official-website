import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "./Home.css";


function Home() {
  const [locations, setLocations] = useState([]);

  return (
    <div className="Home">
      <div className="container">

      </div>
    </div>
  );
}

export default Home;
