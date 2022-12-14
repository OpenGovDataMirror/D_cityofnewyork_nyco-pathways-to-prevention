import React from "react";
import { bool, node, string, oneOfType } from "prop-types";
import style from "./button.module.scss";

const Button = ({ children, disabled, medium, className }) => {
  let buttonSize = medium ? style.medium : "";
  let buttonDisabled = disabled ? style.disabled : "";
  return <button className={`${buttonSize} ${buttonDisabled} ${className}`} disabled={disabled}>{children}</button>;
};

Button.propTypes = {
  children: oneOfType([string, node]).isRequired,
  disabled: bool,
  medium: bool,
  className: string,
};

Button.defaultProps = {
  disabled: false,
  medium: false,
  className: "",
};

export default Button;
