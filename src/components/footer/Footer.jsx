import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        My Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sagun's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
