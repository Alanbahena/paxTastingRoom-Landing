import clasess from "./Button.module.scss";

const Button = (props) => {
  return (
    <a
      href={props.href}
      className={`${clasess.btn} ${props.className}`}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

export default Button;
