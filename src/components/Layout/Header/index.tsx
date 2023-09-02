"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css"; // Assuming you have a Header.module.css file for styling
import Image from "next/image";
import { FiDroplet, FiMoon } from "react-icons/fi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx"
import { VscClose } from "react-icons/vsc"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    if(document.documentElement.className === "dark"){
      document.documentElement.className = "light";
    }
    else{
      document.documentElement.className = "dark";
    }
    setTheme((prev)=>prev==="dark" ? "light" : "dark")
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.appbar}>
        <div className={styles.Toolbar}>
          <Link href="/">
            <div className={`${styles.logobody} ${styles.headerColors}`}>
              
                <Image src="/logo.jpg" alt="Logo" width={40} height={40} className={styles.logoimg} />
            
              <div className={styles.headername}>GEC Coders Club</div>
            </div>
          </Link>
          
          <div className={styles.headerbt}>

            {menuOpen && (
              <div key={`nav-${menuOpen}`} className={`${styles.navbuttons} ${styles.headerColors}`}>
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
                  <Link href="/foss" className={styles.navlink}>
                    FOSS
                  </Link>
                </div>
                <div className={styles.navitem}>
                  <Link href="/contactus" className={styles.navlink}>
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
            <button onClick={()=>setMenuOpen((prev)=>!prev)} key={`menu-${menuOpen}`} className={`${styles.themetoggle} ${styles.headerColors}`}>
              { menuOpen ? <VscClose className={styles.menuIcon} size={20} /> : <RxHamburgerMenu className={styles.menuIcon} size={18} />}
            </button>
            <button key={`theme-${theme}`} onClick={toggleTheme} className={`${styles.themetoggle} ${styles.headerColors}`}>
              { theme === "dark" ? <BsSun className={styles.themeIcon} size={18} /> : <BsMoonStars className={styles.themeIcon} size={15} /> }
            </button>
          </div>
        </div>
        <div>
        {menuOpen && (
              <div key={`nav-${menuOpen}`} className={`${styles.smallnavbuttons} ${styles.headerColors}`}>
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
                  <Link href="/foss" className={styles.navlink}>
                    FOSS
                  </Link>
                </div>
                <div className={styles.navitem}>
                  <Link href="/contactus" className={styles.navlink}>
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Header;
