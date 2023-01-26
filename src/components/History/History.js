import React from "react";

import logo from "../../assets/img/Logo2.png";
import image1 from "../../assets/img/History-img1.jpg";
import image2 from "../../assets/img/History-img2.jpg";

import clasess from "./History.module.scss";

const History = () => {
  return (
    <div className={clasess.container} id="#acerca">
      <div className={clasess.images}>
        <img
          src={image1}
          alt="Historia"
          className={clasess["images-1"]}
          loading="lazy"
        ></img>
        <img
          src={image2}
          alt="Historia"
          className={clasess["images-2"]}
          loading="lazy"
        ></img>
      </div>
      <div className={clasess.box}>
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className={clasess.logo}
        ></img>
        <h4>Nuestra historia</h4>
        <p>
          Pax Tasting Room abre sus puerta en febrero del 2022, creado para que
          las personas puedan disfrutar de una buena cerveza artesanal, un drink
          de mixología o un mezcalito. Un menú hecho para que puedas acompañar
          tus tragos mientras disfrutas de una buena plática o la música en vivo
          que tenemos ciertos días de la semana. Nos gusta crear experiencias
          para que pases un buen rato con nosotros.
        </p>
      </div>
    </div>
  );
};

export default History;
