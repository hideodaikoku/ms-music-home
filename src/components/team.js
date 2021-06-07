import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import teamStyles from "../styles/components/team.module.scss";
import TopPageArrow from "./topPageArrow";

const TeamComponent = () => {
  return (
    <div className={landingStyles.container + " " + teamStyles.background}>
      <div className={landingStyles.textOverlay}>
        <h2 className={landingStyles.titleLarge}>Team</h2>
        <Link to="/team" className={landingStyles.linkWhite}>
          <TopPageArrow stroke="white" />
        </Link>
      </div>
    </div>
  );
};

export default TeamComponent;
