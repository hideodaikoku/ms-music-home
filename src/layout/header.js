import React from "react";
import { useStaticQuery,　graphql, Link } from "gatsby";
import Img from "gatsby-image";
import headerStyles from "../styles/layout/header.module.scss";

const Header = (props) => {
  const data = useStaticQuery(graphql`
  query{
    logo: file(relativePath: {eq: "moonshot-logo.png"}){
      childImageSharp {
        fluid(maxWidth: 1080){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <div>
      <nav className={headerStyles.nav}>
        <Link className={headerStyles.siteTitle} to="/">
          <Img fluid={data.logo.childImageSharp.fluid} className={headerStyles.logo}/>
        </Link>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/message"
            >
              メッセージ
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              概要
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
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              プロジェクト
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/team"
            >
              チーム
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.button}
              activeClassName={headerStyles.activeNavItem}
              to="/join-us"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
