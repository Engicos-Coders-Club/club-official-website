
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import logo from "../../public/logo.svg"

// import "./Header.css";

function Header({ title }) {

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.header}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.Toolbar}>
          <div className={styles.headerlogo}>
            <img src={logo} alt="logo" className={styles.logoimg} />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GEC Coders Club
          </Typography>
          <div className={styles.navbuttons}>
            <div className={styles.navitem}>
              <Typography variant="h6" component="div">
                <Link href="/" className={styles.navlink}>
                  Home
                </Link>
              </Typography>
            </div>
            <div className={styles.navitem}>
              <Typography variant="h6" component="div">
                <Link href="/Events" className={styles.navlink}>
                  Events
                </Link>
              </Typography>
            </div>
            <div className={styles.navitem}>
              <Typography variant="h6" component="div">
                <Link href="/FOSS" className={styles.navlink}>
                  FOSS
                </Link>
              </Typography>
            </div>
            <div className={styles.navitem}>
              <Typography variant="h6" component="div">
                <Link href="/contactus" className={styles.navlink}>
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

