import React from "react";
import { Link } from "gatsby";
import { bool, string } from "prop-types";
import HeaderLogo from "../svgs/logos/header-logo.svg";
import CaretDownCircle from "../svgs/icons/icon-caret-down-circle.svg";
import PlusCircle from "../svgs/icons/icon-plus-circle.svg";
import PlusCircleActive from "../svgs/icons/icon-plus-circle-white.svg";
import style from "./header.module.scss";

const Header = ({ activePage, showNotification }) => {
  // Change which page the build profile button takes us to:
  const buildProfileLink = showNotification
    ? "/build-profile/build-yours"
    : "/build-profile/init";
  const navItems = [
    { label: "Types of Support", link: "/support-types" },
    { label: "Program Information", link: "/program-info/journey" },
    { label: "Providers", link: "/providers" },
    { label: "Stories", link: "/stories" },
    {
      icon: { normal: <PlusCircle />, active: <PlusCircleActive /> },
      label: "Build your Profile",
      link: buildProfileLink,
    },
  ];

  return (
    <header>
      <div className={style.header}>
        <Link to="/">
          <HeaderLogo />
        </Link>
        <a className={style.language}>
          <CaretDownCircle /> Language
        </a>
      </div>
      <nav>
        <ul className={style.navbar}>
          {navItems.map(({ icon, label, link }, index) => {
            /* For use cases in which we have longer paths,
            such as "/program-info/journey" */
            const linkRootUri = link.split("/")[1];
            const activePageRootUri = activePage.split("/")[1];
            /* */
            const isActive = activePageRootUri === linkRootUri;
            const isBuildProfilePage =
              linkRootUri === "build-profile" && isActive;
            return (
              <li
                className={isBuildProfilePage ? style.buildActive : ""}
                key={index}
              >
                <Link to={link}>
                  {icon && (
                    <span className={style.icon}>
                      {isBuildProfilePage ? icon.active : icon.normal}
                    </span>
                  )}
                  <div className={isActive ? style.active : ""}>
                    {label}
                    {linkRootUri === "build-profile" && showNotification && (
                      <span className={style.notification}>2</span>
                    )}
                    {isActive &&
                      (isBuildProfilePage ? (
                        <div className={style.downArrow}>&#9650;</div>
                      ) : (
                        <hr />
                      ))}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  activePage: string.isRequired,
  showNotification: bool.isRequired,
};

export default Header;
