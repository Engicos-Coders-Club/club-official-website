"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./styles.css"; // Assuming you have a Header.module.css file for styling
import Image from "next/image";

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
    <div className={`header`}>
      <div className={`appbar`}>
        <div className={`Toolbar`}>
          <Link href="/">
            <div className={`${`logobody`} ${`headerColors`}`}>
              
                <Image src="/logo.jpg" alt="Logo" width={40} height={40} className={`logoimg`} />
            
              <div className={`headername`}>GEC Coders Club</div>
            </div>
          </Link>
          
          <div className={`headerbt`}>

            {menuOpen && (
              <div key={`nav-${menuOpen}`} className={`${`navbuttons`} ${`headerColors`}`}>
                <div className={`navitem`}>
                  <Link href="/" className={`navlink`}>
                    Home
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/events" className={`navlink`}>
                    Events
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/foss" className={`navlink`}>
                    FOSS
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/contact-us" className={`navlink`}>
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
            <button onClick={()=>setMenuOpen((prev)=>!prev)} key={`menu-${menuOpen}`} className={`${`themetoggle`} ${`headerColors`}`}>
              { menuOpen ? <VscClose className={`menuIcon`} size={20} /> : <RxHamburgerMenu className={`menuIcon`} size={18} />}
            </button>
            <button key={`theme-${theme}`} onClick={toggleTheme} className={`${`themetoggle`} ${`headerColors`}`}>
              { theme === "dark" ? <BsSun className={`themeIcon`} size={18} /> : <BsMoonStars className={`themeIcon`} size={15} /> }
            </button>
          </div>
        </div>
        <div>
        {menuOpen && (
              <div key={`nav-${menuOpen}`} className={`${`smallnavbuttons`} ${`headerColors`}`}>
                <div className={`navitem`}>
                  <Link href="/" className={`navlink`}>
                    Home
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/Events" className={`navlink`}>
                    Events
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/foss" className={`navlink`}>
                    FOSS
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/contact-us" className={`navlink`}>
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

export { Header };
