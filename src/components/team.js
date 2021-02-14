import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import teamStyles from "../styles/components/team.module.scss";

const TeamComponent = () => {
  return (
    <div className={landingStyles.container+" "+teamStyles.background}>
      <div className={landingStyles.textOverlay}>
        <h2 className={landingStyles.titleLarge}>Team</h2>
        <Link to="/team" className={landingStyles.linkWhite}>
          [ READ MORE
          <svg
            width="63"
            height="18"
            viewBox="0 0 63 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 17H60L47.234 1" stroke="white" stroke-width="2" />
          </svg>
          ]
        </Link>
      </div>
    </div>
  );
};

export default TeamComponent;
