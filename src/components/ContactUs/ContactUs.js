

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

import "./ContactUs.css";

function ContactUs({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ContactUs, setContactUs] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ContactUsHome">
      <div className="ContactUscontainer">
        <div className="MainContent">
          <div className="ContactUsHeading">
            <p> About Us</p>
          </div>
          <div className="ContactUs-container">
            {ContactUs.map((ContactUs) => (
              <div className="ContactUs-card" key={ContactUs.id}>
                <div className="ContactUs-image-container">
                  <img
                    className="ContactUs-image"
                    src={ContactUs.ContactUs_Pic}
                    alt={`ContactUs ${ContactUs.Name}`}
                  />
                </div>
                <div className="ContactUs-info">
                  <div className="ContactUs-name">{ContactUs.Name}</div>
                  <div className="ContactUs-phone">{ContactUs.Phone_Number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
