import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./ClubLogo.png"; // Import the logo file

import "./Header.css";

function Header({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <div className="logo">
            <img src={logo} alt="logos" className="logo-img" />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GEC Coders Club
          </Typography>
          <div className="navbuttons">
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/Team" className="nav-link">
                  Events
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/FOSS" className="nav-link">
                  FOSS
                </Link>
              </Typography>
            </div>
            <div className="nav-item">
              <Typography variant="h6" component="div">
                <Link to="/AboutUs" className="nav-link">
                  Contact Us
                </Link>
              </Typography>
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
