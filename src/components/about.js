import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";

const AboutComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>Vision</h3>
        <p className={landingStyles.desc}>
          私たちは、芸術科学立国を成し遂げ、ムーンショット音楽芸術を地球全体で共創します。
          全地球生命が一体となり、地球文化の普遍性を宇宙に響鳴させる感動の音楽芸術です。
        </p>
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
