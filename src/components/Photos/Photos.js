import React from "react";

import photo1 from "../../assets/img/photo1.jpg";
import photo2 from "../../assets/img/photo2.jpg";
import photo3 from "../../assets/img/photo3.jpg";
import photo4 from "../../assets/img/photo4.jpg";
import photo5 from "../../assets/img/photo5.jpg";
import photo6 from "../../assets/img/photo6.jpg";

import clasess from "./Photos.module.scss";

const Photos = () => {
  return (
    <div className={clasess.container} id="#galeria">
      <img
        src={photo1}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
      <img
        src={photo2}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
      <img
        src={photo3}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
      <img
        src={photo4}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
      <img
        src={photo5}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
      <img
        src={photo6}
        alt="Pax1"
        className={clasess["container-img"]}
        loading="lazy"
      ></img>
    </div>
  );
};

export default Photos;
