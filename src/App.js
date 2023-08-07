import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import FOSS from "./components/FOSS/FOSS";
import AboutUs from "./components/ContactUs/ContactUs"
import Events from "./components/Events/Events"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="Appcontainer">
        <div className="Appcontent">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/FOSS" element={<FOSS />} />
            <Route path="/ContactUs" element={<AboutUs />} />
            <Route path="/Events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
