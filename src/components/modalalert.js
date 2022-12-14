import React from "react";
import { Link } from "gatsby";
import { node, string } from "prop-types";
import style from "./modalalert.module.scss";
import CloseIcon from "../svgs/icons/icon-close.svg";

const ModalAlert = ({ children, linkBack }) => (
  <div className={style.modalContainer}>
    <div className={style.modalContent}>
      <Link to={linkBack}>
        <span className={style.closeIcon}>
          <CloseIcon />
        </span>
      </Link>
      {children}
    </div>
  </div>
);

ModalAlert.propTypes = {
  children: node.isRequired,
  linkBack: string.isRequired,
};

export default ModalAlert;
