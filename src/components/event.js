import React from "react";
import { Link } from "gatsby"
// import landingStyles from "../styles/layout/landing.module.scss";
import eventStyles from "../styles/components/event.module.scss";

const EventComponent = ({index, title, date, desc}) => {
    
  return (
    <div key={index} className={eventStyles.background}>
      <div className={eventStyles.ticket}>
        <div className={eventStyles.title}>
            {title}
        </div>
          <div className={eventStyles.desc}>
            <div className={eventStyles.subtitle}>About</div>
              {desc}
          </div>
        
          <div className={eventStyles.date}>
            <div className={eventStyles.subtitle}>Date</div>
              {date}
          </div>
        <div className={eventStyles.detail}>
          詳細
        </div>
      </div>
      {/* <h2 className={landingStyles.titleLargeBlue}>Event</h2>
      <Link to="/events" className={landingStyles.link}>
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
      </Link> */}
    </div>
  );
};

export default EventComponent;
