import React from "react";
import style from "./input.module.scss";
import { node } from "prop-types";

const Input = ({ icon }) => {
  return (
    <div className={style.inputContainer}>
      <input type="text" defaultValue="Brooklyn" />
      {icon && <span>{icon}</span>}
    </div>
  );
};

Input.propTypes = {
  icon: node,
};

Input.defaultProps = {
  icon: null,
};

export default Input;
