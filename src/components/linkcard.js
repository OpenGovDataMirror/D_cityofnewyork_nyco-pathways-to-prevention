import React from "react";
import { bool, node, string } from "prop-types";
import style from "./linkcard.module.scss";
import { Link } from "gatsby";

const LinkCard = ({ children, disabled, supportType, linkTo }) => {
  const linkCardContent = (
    <div
      className={`${style.linkCard} ${disabled ? style.disabled : ""}${
        supportType ? style.supportLinkCard : ""
      }`}
    >
      <div className={style.description}>{children}</div>
    </div>
  );
  return linkTo ? <Link to={linkTo}>{linkCardContent}</Link> : linkCardContent;
};

LinkCard.propTypes = {
  children: node.isRequired,
  supportType: bool,
  disabled: bool,
  linkTo: string,
};

LinkCard.defaultProps = {
  supportType: false,
  disabled: false,
  linkTo: null,
};

export default LinkCard;
