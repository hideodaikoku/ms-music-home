import React from "react";
import { useStaticQuery,　graphql, Link } from "gatsby";
import Img from "gatsby-image";
import headerStyles from "../styles/layout/header.module.scss";

const Header = (props) => {
  const data = useStaticQuery(graphql`
  query{
    logo: file(relativePath: {eq: "moonshot-logo.png"}){
      childImageSharp {
        fluid(maxWidth: 1024){
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
              to="/"
            >
              Top
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/message"
            >
              Message
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About Us
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
              to="/team"
            >
              Team
            </Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.button}
              activeClassName={headerStyles.activeNavItem}
              to="/join-us"
            >
              Join Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
