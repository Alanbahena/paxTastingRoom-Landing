import React from "react";
import clasess from "./Layout.module.scss";

const Layout = (props) => {
  return <div className={clasess.container}>{props.children}</div>;
};

export default Layout;
