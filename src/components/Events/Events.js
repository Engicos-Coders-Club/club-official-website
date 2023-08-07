// // Events members : 1. Prarthana, 2.Ibtisam, 3. Nandaj, 4.Ayman

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
            <p> Driver Details</p>
          </div>
          <div className="Events-container">
            {Events.map((driver) => (
              <div className="driver-card" key={driver.id}>
                <div className="driver-image-container">
                  <img
                    className="driver-image"
                    src={driver.Driver_Pic}
                    alt={`Driver ${driver.Name}`}
                  />
                </div>
                <div className="driver-info">
                  <div className="driver-name">{driver.Name}</div>
                  <div className="driver-phone">{driver.Phone_Number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Eventsidebar"></div>
      </div>
    </div>
  );
}

export default Events;

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import ActiveFOSS from "../ActiveBus/AcitveFOSS";

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";

// import "./Events.css";

// function Events({ title }) {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="Home">
//       <div className="container">
//         <Box sx={{ flexGrow: 1 }} className="driverContainer">
//           <i className="headingg" aria-hidden="true">
//             Write your code here
//           </i>
//         </Box>
//         <ActiveFOSS />
//       </div>
//     </div>
//   );
// }

// export default Events;
