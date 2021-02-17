import React from "react";
import {Link} from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";

const AboutComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h2 className={landingStyles.titleLargeBlue}>Vision</h2>
        <Link to="/about" className={landingStyles.link}>
          [ READ MORE
          <svg
            width="63"
            height="18"
            viewBox="0 0 63 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 17H60L47.234 1" stroke="#015C99" stroke-width="2" />
          </svg>
          ]
        </Link>
      </div>
    </div>
  );
};

export default AboutComponent;
