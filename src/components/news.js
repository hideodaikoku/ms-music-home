import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import newsStyles from "../styles/components/news.module.scss";
import TopPageArrow from "./topPageArrow";

const NewsComponent = ({
  key,
  slug,
  title,
  date,
  category,
  excerpt,
  fluid,
}) => {
  return (
    <div className={landingStyles.container + " " + newsStyles.background}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLarge}>News</h3>
        <Link to="/news" className={landingStyles.linkWhite}>
          <TopPageArrow stroke="white" />
        </Link>
      </div>
    </div>
  );
};

export default NewsComponent;
