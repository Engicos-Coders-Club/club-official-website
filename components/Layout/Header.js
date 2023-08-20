
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import logo from "../../public/logo.jpg"
import themelogo from "../../public/themeicon.png"

// import "./Header.css";

function Header({ title }) {

  return (
    <Box className={styles.header}>
      <div className={styles.appbar}>
        <div className={styles.Toolbar}>
          <Link href="/">
            <div className={`${styles.logobody} ${styles.headerColors}`}>
              <div className={styles.headerlogo}>
                <img src={logo.src} alt="logo" className={styles.logoimg} />
              </div>
              <div className={styles.headername}>
                GEC Coders Club
              </div>
            </div>
          </Link>
          <div className={styles.headerbt}>
            <div className={`${styles.navbuttons} ${styles.headerColors}`}>
              <div className={styles.navitem}>
                <Link href="/" className={styles.navlink}>
                  Home
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/Events" className={styles.navlink}>
                  Events
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/FOSS" className={styles.navlink}>
                  FOSS
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/contactus" className={styles.navlink}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={`${styles.themetoggle} ${styles.headerColors}`}>
              <img
                src={themelogo.src}
                alt="logo"
                className={styles.themeicon}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Header;

