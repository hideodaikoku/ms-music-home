import React from "react";
import { Link } from "gatsby";
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
        <div className={landingStyles.link}>
          <Link to="/event">
            <TopPageArrow stroke="#015C99" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventLandingComponent;
