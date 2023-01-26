import React from "react";
import clasess from "./Food.module.scss";
import img1 from "../../assets/img/cheese.jpg";
import img2 from "../../assets/img/pulledFries.jpg";
import img3 from "../../assets/img/ribs.jpg";
import Button from "../../UI/Button";
import pdf from "../../assets/pdf/PaxMenu.pdf";

const Food = () => {
  const menu = [
    {
      id: 1,
      image: img1,
      title: "Cheeseburger",
      description: "Queso Amarillo y pepinillos",
    },
    {
      id: 2,
      image: img2,
      title: "Pulled pork fries",
      description:
        "Tiras de pollo sin hueso acompañadas de ranch marinadas en salsa de elección: búfalo o bbq",
    },
    {
      id: 3,
      image: img3,
      title: "San Luis Ribs",
      description: "Acompañadas de papas y ensalada verde",
    },
  ];

  return (
    <div className={clasess.container} id="#menu">
      <h2>Conoce nuestro menu</h2>
      <div className={clasess["box-cards"]}>
        {menu.map((item) => (
          <div className={clasess.card} key={item.id}>
            <img src={item.image} alt="Menu" loading="lazy"></img>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Button href={pdf} className={clasess.btn} target="_blank">
        Explorar Menu
      </Button>
    </div>
  );
};

export default Food;
