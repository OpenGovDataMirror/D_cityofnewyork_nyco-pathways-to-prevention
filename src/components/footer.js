import React from "react";
import FooterLogo from "../svgs/logos/footer-logo.svg";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <FooterLogo />
      <h4 className={style.title}>Have Questions?</h4>
      <div className={style.info}>
        Call our hotline at: <span className={style.detail}>123-456-7890</span>
      </div>
      <div className={style.info}>
        Send an email to: <span className={style.detail}>email@asc.gov</span>
      </div>
    </footer>
  );
};

export default Footer;
