
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import "./Events.css";

function Events({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Events, setEvents] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="DriverHome">
      <div className="Drivercontainer">
        <div className="MainContent">
          <div className="DriverHeading">
            <p>Upcoming Events</p>
          </div>
          <div className="DriverHeading">
            <p>Past Events</p>
          </div>
        </div>
        <div className="Eventsidebar"></div>
      </div>
    </div>
  );
}

export default Events;
