import React from "react";
// import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import TopPageArrow from "./topPageArrow";

const SurveyComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>SURVEY</h3>
        <a
          href="/survey"
          alt={"survey link"}
          noopener
          noreferrer
          className={landingStyles.link}
        >
          <TopPageArrow stroke="#015C99" />
        </a>
        {/* <p className={landingStyles.desc}>
          [ COMING SOON ]
        </p> */}
        {/* <a href="#" alt={"qualtrics survey link"} target="_blank"
        noopener noreferrer className={landingStyles.link}>
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
        </a> */}
      </div>
    </div>
  );
};

export default SurveyComponent;
