import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const CONTACT_FORM_URL = "";

const Header = (props) => {
 

  return (
    <div className={colorClass}>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.listItem}>
            <strong>S1</strong>
          </li>
          <li className={headerStyles.listItem}>
            <strong>S2</strong>
          </li>
          <li className={headerStyles.listItem}>
            <strong>S3</strong>
          </li>
          <li className={headerStyles.listItem}>
            <strong>S4</strong>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
