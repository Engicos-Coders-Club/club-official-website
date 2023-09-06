"use client"

import React, { useState } from 'react'
import "./styles.css"
import Image from 'next/image'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { RxHamburgerMenu } from "react-icons/rx"
import { GrClose } from "react-icons/gr"

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    if(document.documentElement.className === "dark") document.documentElement.className = "light";
    else document.documentElement.className = "dark";
    setTheme((prev)=>prev === "dark" ? "light" : "dark")
  }
  
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Image 
                src="/logo.svg"
                alt="GEC Coders CLub Logo"
                className='navbar-brand-logo'
                width={35}
                height={35}
                priority
            />
            <p className='navbar-brand-title'>CODERS CLUB</p>
        </div>
        <div className='navbar-menu'>
            {
                <div key={`navbar-menu-routes-${isMenuOpen}`} className={`navbar-menu-routes navbar-menu-routes-${isMenuOpen}`}>
                    <a>About</a>
                    <a>About</a>
                    <a>About</a>
                    <a>About</a>
                </div>
            }
            <button onClick={()=>setIsMenuOpen((prev)=>!prev)}>{isMenuOpen ? <GrClose /> : <RxHamburgerMenu />}</button>
            <button onClick={toggleTheme}>{ theme === "dark" ? <BsMoonStars /> : <BsSun />}</button>
        </div>
    </nav>
  )
}

export { Navbar }