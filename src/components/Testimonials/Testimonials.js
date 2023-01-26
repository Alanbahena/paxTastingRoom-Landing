import React from "react";

import person1 from "../../assets/img/person1.jpg";
import person2 from "../../assets/img/person2.jpg";
import person3 from "../../assets/img/person3.jpg";
import star from "../../assets/img/Star.jpg";
import clasess from "./Testimonials.module.scss";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      image: person1,
      name: "Victoria Santiago",
      description:
        "Es un buen lugar para ir a pasar el rato pedir unas bebidas y algo de comer. Es un lugar pequeño pero ofrece bastante variedad de bebidas y entradas muy buenas. También tienen música en vivo tipo jazz.",
    },
    {
      id: 2,
      image: person2,
      name: "Brenda Alejos",
      description:
        "Es un increíble spot gastronómico y con cerveza artesanal, tengo que decir que su comida tiene un sabor extraordinario, excelente presentación. Los precios son razonables a la calidad que de los platillos",
    },
    {
      id: 3,
      image: person3,
      name: "Maraco Negrete",
      description:
        "Mi lugar favorito, muy buen ambiente, buena música, siempre nos atienden de lo mejor,  la cerveza artesanal,  los tragos y la comida de lo mejor, lo recomiendo",
    },
  ];
  return (
    <div className={clasess.container}>
      <h2>Testimonios</h2>
      <div className={clasess["container-box"]}>
        {reviews.map((item) => (
          <div className={clasess["container-box__card"]} key={item.id}>
            <img
              className={clasess["container-box__card--img"]}
              src={item.image}
              alt="Testimonio"
              loading="lazy"
            ></img>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <div>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
              <img src={star} alt="star"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
