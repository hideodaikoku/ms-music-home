import React from "react";
import { Link } from "gatsby"
import landingStyles from "../styles/layout/landing.module.scss";
import eventStyles from "../styles/components/event.module.scss";

const EventComponent = () => {
    
  return (
    <div className={landingStyles.container+" "+eventStyles.background}>
      <div className={landingStyles.textOverlay}>
        <h2 className={landingStyles.titleLargeBlue}>Event</h2>
        <Link to="/event" className={landingStyles.link}>
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

export default EventComponent;
