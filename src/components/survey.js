import { Link } from "gatsby";
import React from "react";
// import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import TopPageArrow from "./topPageArrow";

const SurveyComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>SURVEY</h3>
        <div className={landingStyles.link}>
          <Link to="/survey">
            <TopPageArrow stroke="#015C99" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurveyComponent;
