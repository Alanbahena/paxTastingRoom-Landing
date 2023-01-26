import React from "react";
import clasess from "./Header.module.scss";
import Navbar from "./Navbar";
import Content from "./Content";

const Header = () => {
  return (
    <div className={clasess.container}>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
};

export default Header;
