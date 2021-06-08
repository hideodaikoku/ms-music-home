import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import TopPageArrow from "./topPageArrow";

const JoinUsComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>Contact Us</h3>
        <p className={landingStyles.desc}>
          私たちの取り組みについてのお問合せは、下記のリンクからお問い合わせください。
        </p>
        <div className={landingStyles.link}>
          <Link to="/contact">
            <TopPageArrow stroke="#015C99" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUsComponent;
