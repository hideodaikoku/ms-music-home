import React from "react";
import { Link } from "gatsby"
// import landingStyles from "../styles/layout/landing.module.scss";
import eventStyles from "../styles/components/eventComponent.module.scss";

const EventComponent = ({key, slug, title, date, category, excerpt, fluid}) => {
    
  //date format for the featured article
  if (date){
    date = date.split('T')[0];
  }
  else {
    date = "";
  }

  return (
    <div key={key} className={eventStyles.background}>
      <div className={eventStyles.ticket}>
        <div className={eventStyles.title}>
            {title}
        </div>
          <div className={eventStyles.desc}>
            <div className={eventStyles.subtitle}>About</div>
              {excerpt}
          </div>
          <div className={eventStyles.date}>
            <div className={eventStyles.subtitle}>Date</div>
              {date}
          </div>
        <div className={eventStyles.viewlayout}>
         <Link to={slug} style={{ textDecoration: 'none' }}>
            <div id="viewbutton" className={eventStyles.viewbutton}>VIEW》</div>
          </Link>
        </div>
      </div>
      {/* <h2 className={landingStyles.titleLargeBlue}>Event</h2>
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
      </Link> */}
    </div>
  );
};

export default EventComponent;
