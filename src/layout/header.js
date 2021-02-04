import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/layout/header.module.scss";

const Header = (props) => {
  return (
    <div>
      <nav className={headerStyles.nav}>
        <Link className={headerStyles.siteTitle} to="/">
          <h1 className={headerStyles.title}>MSMUSIC</h1>
        </Link>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              企画概要
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/vision"
            >
              ミッション
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/news"
            >
              ニュース
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/events"
            >
              イベント
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <a
              className={headerStyles.link}
              href="https://fveorefean7.typeform.com/to/u5rQJKq9"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせ
            </a>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/team"
            >
              メンバー
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
