import React from "react";
import footerStyles from "../styles/layout/footer.module.scss";
import {Link} from "gatsby";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.container}>
        <ul className={footerStyles.navigation}>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/message"
            >
              メッセージ
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/about"
            >
              概要
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/news"
            >
              ニュース
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/events"
            >
              イベント
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/projects"
            >
              調査
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/team"
            >
              チーム
            </Link>
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/survey"
            >
              アンケート参加
            </Link>
            {/* 
            // replace with a link to the actual survey
            <a href="#" target="_blank" rel="noopener noreerrer" alt="Qualtrics Survey">
              アンケート
            </a> */}
          </li>
          <li className={footerStyles.listItem}>
            <Link
              className={footerStyles.link}
              activeClassName={footerStyles.activeNavItem}
              to="/join-us"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
        <small className={footerStyles.copyright}>
          &copy; 2021, MS MUSIC PROJECT
        </small>
      </div>
    </footer>
  );
};

export default Footer;
