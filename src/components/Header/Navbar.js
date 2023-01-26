import clasess from "./Navbar.module.scss";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const handleClickMenu = () => {
    document.getElementById("#menu").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickAcerca = () => {
    document.getElementById("#acerca").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickGaleria = () => {
    document.getElementById("#galeria").scrollIntoView({ behavior: "smooth" });
  };

  const handleClickContacto = () => {
    document.getElementById("#contacto").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={clasess.container}>
      <a href="/">
        <img alt="Pax Logo" src={logo} className={clasess.img}></img>
      </a>

      <ul className={clasess.list}>
        <li className={clasess.item}>
          <a href="/" className={clasess.link}>
            Inicio
          </a>
        </li>
        <li className={clasess.item} onClick={handleClickMenu}>
          Menu
        </li>
        <li className={clasess.item} onClick={handleClickAcerca}>
          Acerca
        </li>
        <li className={clasess.item} onClick={handleClickGaleria}>
          Galeria
        </li>
        <li className={clasess.item} onClick={handleClickContacto}>
          Contacto
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
