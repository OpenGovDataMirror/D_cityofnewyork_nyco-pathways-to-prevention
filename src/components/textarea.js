import React from "react";
import style from "./textarea.module.scss";
import { string } from "prop-types";

const Textarea = ({ children }) => {
  return (
    <textarea className={style.textarea} defaultValue={children} />
  );
};

Textarea.propTypes = {
  children: string.isRequired,
};

export default Textarea;
