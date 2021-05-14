import React from "react";
// import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import eventLandingStyles from "../styles/components/eventLandingComponent.module.scss";

const SurveyComponent = () => {
  return (
    <div className={landingStyles.container+" "+eventLandingStyles.background}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>EVENT</h3>
        <p className={landingStyles.desc}>
        </p>
        <a href="/event" alt={"event link"}
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
        </a>
      </div>
    </div>
  );
};

export default SurveyComponent;
