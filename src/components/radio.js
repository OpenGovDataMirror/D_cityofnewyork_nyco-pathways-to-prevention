import React, { Fragment } from "react";
import style from "./radio.module.scss";
import { string, arrayOf, object } from "prop-types";

const Radio = ({ options, name }) => {
  return options.map(({ label, id, onClick, checked }) => (
    <Fragment key={id}>
      <input
        type="radio"
        name={name}
        id={id}
        onClick={onClick}
        defaultChecked={checked}
      />
      <label htmlFor={id} className={style.radioLabel}>{label}</label>
    </Fragment>
  ));
};

Radio.propTypes = {
  options: arrayOf(object).isRequired,
  name: string.isRequired,
};

export default Radio;
