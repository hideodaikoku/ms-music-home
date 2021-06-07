import React from "react";
// import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import eventLandingStyles from "../styles/components/eventLandingComponent.module.scss";
import TopPageArrow from "./topPageArrow";

const EventLandingComponent = () => {
  return (
    <div
      className={landingStyles.container + " " + eventLandingStyles.background}
    >
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>EVENT</h3>
        <p className={landingStyles.desc}></p>
        <a
          href="/event"
          alt={"event link"}
          noopener
          noreferrer
          className={landingStyles.link}
        >
          <TopPageArrow stroke="#015C99" />
        </a>
      </div>
    </div>
  );
};

export default EventLandingComponent;
