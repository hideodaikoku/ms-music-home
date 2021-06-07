import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";
import TopPageArrow from "./topPageArrow";

const TopComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.title}>MS音楽感動共創プロジェクト</h3>
        <h4 className={landingStyles.subtext}>
          2050年の社会における音楽芸術はどのようなものでしょうか
        </h4>
        <div className={landingStyles.desc}>
          2050年
          芸術科学立国を成し遂げムーンショット音楽芸術を地球全体で共創します
        </div>
        <div className={landingStyles.link}>
          <Link to="/message">
            <TopPageArrow stroke="#015C99" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
