import React from "react";
import { Link } from "gatsby";
// import landingStyles from "../styles/layout/landing.module.scss";
import eventStyles from "../styles/components/eventComponent.module.scss";

const EventComponent = ({
  key,
  slug,
  title,
  date,
  category,
  excerpt,
  fluid,
}) => {
  //date format for the featured article
  if (date) {
    date = date.split("T")[0];
  } else {
    date = "";
  }

  return (
    <div key={key} className={eventStyles.background}>
      <div className={eventStyles.ticket}>
        <div className={eventStyles.title}>{title}</div>
        <div className={eventStyles.desc}>
          <div className={eventStyles.subtitle}>About</div>
          {excerpt}
        </div>
        <div className={eventStyles.date}>
          <div className={eventStyles.subtitle}>Date</div>
          {date}
        </div>
        <div className={eventStyles.viewlayout}>
          <Link to={slug} style={{ textDecoration: "none" }}>
            <div id="viewbutton" className={eventStyles.viewbutton}>
              VIEW》
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
