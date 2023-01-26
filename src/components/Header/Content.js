import { useEffect, useState } from "react";
import clasess from "./Content.module.scss";
import headerImg2 from "../../assets/img/header2.jpg";
import headerImg from "../../assets/img/header1.jpg";
import Button from "../../UI/Button";
import menu from "../../assets/pdf/PaxMenu.pdf";

const Content = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={clasess.container}>
      <div className={clasess.content}>
        <img
          alt="Pax Header"
          src={index === 0 ? headerImg : headerImg2}
          className={clasess.img}
        ></img>
        <div className={clasess.layer}>&nbsp;</div>
        <div className={clasess.text}>
          <h1 className={clasess.heading}>
            Chill by the beach, taste the beer, feel the peace.
          </h1>
          <Button href={menu} className={clasess.btn} target="_blank">
            Explorar Menu
          </Button>
        </div>
      </div>
      <div className={clasess["dots-container"]}>
        {index === 0 ? (
          <div className={clasess["dot-selected"]}>&nbsp;</div>
        ) : (
          <div className={clasess.dot}>&nbsp;</div>
        )}

        {index === 1 ? (
          <div className={clasess["dot-selected"]}>&nbsp;</div>
        ) : (
          <div className={clasess.dot}>&nbsp;</div>
        )}
      </div>
    </div>
  );
};

export default Content;
