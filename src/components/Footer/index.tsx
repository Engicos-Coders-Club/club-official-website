'use client';

import React from 'react';
import './style.css';
import Image from 'next/image';
import placeholderImag from '../../../public/logo.jpg';

{/* TODO: Separate into another component */}    
const copyFun = () => {
    navigator.clipboard.writeText('codersclub.gec@gmail.com')
}

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="reach-out-to-us">
        <p>Reach out to us</p>
        <a href="mailto:codersclub.gec@gmail.com">codersclub.gec@gmail.com</a>
        <button onClick={copyFun}>Copy</button>
      </div>
      <div className="footer-nav">
        <ul>
          <li><a href="/">Home</a></li>
          {/* TODO: Team link */}
          <li><a href="#">Our Team</a></li>
          <li><a href="https://www.gec.ac.in/" target="_blank">About GEC</a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfY24F2SeC1G7SQkKIq9GvUC5-DmIBPZfXPEH7gc096jou8ew/viewform" target="_blank">Skill Survey</a></li>
        </ul>
      </div>
      <div className="copyright-contact-love">
        <div className="copyright">
          <p>All rights reserved. Coders&apos; Club &copy; 2023</p>
        </div>
        <div className="footer-contact-icons" >
          <ul>
            <li><a href="https://github.com/Engicos-Coders-Club/" target="_blank">GH</a></li>
            {/* TODO: contach links */}          
            <li><a href="#" target="_blank">LI</a></li>
            <li><a href="#" target="_blank">IG</a></li>
            <li><a href="#" target="_blank">Discord</a></li>
            <li><a href="#" target="_blank">YT</a></li>
          </ul>
        </div>
        <div className="made-with-love">
          <p>Made with love at <a href="#">TODO??</a></p>
        </div>
      </div>    
    </footer>
  );
};

export default Footer;
