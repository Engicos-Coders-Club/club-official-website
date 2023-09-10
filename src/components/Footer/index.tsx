'use client';

import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram, BsDiscord, BsYoutube } from "react-icons/bs";
import './style.css';
import CopyableURL from '../CopyableURL';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="reach-out-to-us">
        <p className="reach-out-to-us-message">Reach out to us</p>
        <CopyableURL url="mailto:codersclub.gec@gmail.com" displayText="codersclub.gec@gmail.com" textToCopy="codersclub.gec@gmail.com" />
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
            <li><a href="https://github.com/Engicos-Coders-Club/" target="_blank"> <BsGithub/> </a></li>
            <li><a href="https://www.linkedin.com/company/gec-coders-club/" target="_blank"> <BsLinkedin/> </a></li>
            <li><a href="https://instagram.com/coders.club.engico" target="_blank"> <BsInstagram/> </a></li>
            <li><a href="https://discord.gg/VjFgqAaGtb" target="_blank"> <BsDiscord/> </a></li>
            <li><a href="https://www.youtube.com/channel/UCWKKdEYpHTsJy8lffp7RLUQ" target="_blank"> <BsYoutube/> </a></li>
          </ul>
        </div>
        <div className="made-with-love">
          <p>Made with love &#x1F493; at <a href="https://github.com/Engicos-Coders-Club/club-official-website" target="_blank">GEC Coders&apos; Club</a></p>
        </div>
      </div>    
    </footer>
  );
};

export {Footer};
