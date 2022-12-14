import React from "react";
import { bool, node, string } from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "./layout.scss";

const Layout = ({ activePage, children, showNotification }) => (
  <>
    <Header activePage={activePage} showNotification={showNotification} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  activePage: string,
  children: node.isRequired,
  showNotification: bool,
};

Layout.defaultProps = {
  activePage: "",
  showNotification: false,
};

export default Layout;
