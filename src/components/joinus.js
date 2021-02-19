import React from "react";
import {Link} from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";

const JoinUsComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>Contact Us</h3>
        <p className={landingStyles.desc}>私たちの取り組みについてのお問合せは、下記のリンクからお問い合わせください。</p>
        <Link to="/join-us" className={landingStyles.link}>
          [ READ MORE
          <svg
            width="63"
            height="18"
            viewBox="0 0 63 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 17H60L47.234 1" stroke="#015C99" strokeWidth="2" />
          </svg>
          ]
        </Link>
      </div>
    </div>
  );
};

export default JoinUsComponent;
