import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/layout/header.module.scss";

const Header = (props) => {
  return (
    <div>
      <nav className={headerStyles.nav}>
        <h1 className={headerStyles.siteTitle}>
          MS MUSIC
        </h1>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/mission"
            >
              Mission
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/news"
            >
              News
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/events"
            >
              Events
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/team"
            >
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
