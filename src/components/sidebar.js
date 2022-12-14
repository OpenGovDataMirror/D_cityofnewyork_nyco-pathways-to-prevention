import React from "react";
import { Link } from "gatsby";
import { string } from "prop-types";
import style from "./sidebar.module.scss";
import RightArrowHead from "../svgs/icons/icon-caret-right.svg";

const Sidebar = ({ currentPage }) => {
  const baseUrl = "/program-info";
  const navItems = [
    { label: "Your Journey", link: `${baseUrl}/journey` },
    { label: "Who provides support?", link: `${baseUrl}/support` },
    { label: "What should I expect?", link: `${baseUrl}/expectations` },
    { label: "What about my ACS case?", link: `${baseUrl}/my-case` },
  ];

  return (
    <nav className={style.sidebar}>
      <ul>
        {navItems.map(({ label, link }, index) => (
          <li key={label}>
            { currentPage === link && <span><RightArrowHead /></span> }
            <Link to={link}>{label}</Link>
            {index === 0 && <hr />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  currentPage: string.isRequired,
};

export default Sidebar;
