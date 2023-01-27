import React from "react";
import logo from "../../assets/img/circular-logo.jpg";
import fb from "../../assets/svg/fb.svg";
import ig from "../../assets/svg/ig.svg";
import clasess from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={clasess.container}>
      <img src={logo} alt="logo" className={clasess.logo}></img>
      <span className={clasess.text}>Síguenos en redes sociales</span>
      <div className={clasess.box}>
        <a href="https://www.facebook.com/paxtastingroom/">
          <img src={fb} alt="fb"></img>
        </a>
        <a href="https://www.instagram.com/paxtastingroom/">
          <img src={ig} alt="ig"></img>
        </a>
      </div>
      <hr></hr>
      <span className={clasess.copy}>Copyright 2023. PaxTastingRoom</span>
    </div>
  );
};

export default Footer;
