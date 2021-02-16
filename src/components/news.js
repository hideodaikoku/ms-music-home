import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import newsStyles from "../styles/components/news.module.scss";

const NewsComponent = () => {

  return (
    <div className={landingStyles.container+" "+newsStyles.background}>
        <div className={landingStyles.textOverlay}>
          <h3 className={landingStyles.titleLarge}>News</h3>
          <Link to="/news" className={landingStyles.linkWhite}>
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

export default NewsComponent;
