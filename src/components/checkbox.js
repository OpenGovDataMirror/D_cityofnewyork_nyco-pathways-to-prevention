import React from "react";
import style from "./checkbox.module.scss";
import { func, string } from "prop-types";

const Checkbox = ({ id, label, onCheck }) => {
  return (
    <>
      <input className={style.styledCheckbox} type="checkbox" id={id} />
      {label && <label className={style.checkboxLabel} htmlFor={id} onClick={onCheck}>{label}</label>}
    </>
  );
};

Checkbox.propTypes = {
  label: string,
  id: string.isRequired,
  onCheck: func,
};

Checkbox.defaultProps = {
  label: null,
};

export default Checkbox;
