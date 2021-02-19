import React from "react";
import { Link } from "gatsby";
import landingStyles from "../styles/layout/landing.module.scss";

const TopComponent = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.title}>MS音楽感動共創メッセージ</h3>
        <h4 className={landingStyles.subtext}>
          2050年の社会における音楽芸術はどのようなものでしょうか
        </h4>
        <p className={landingStyles.desc}>
          2050年 芸術科学立国を成し遂げ
          <br />
          ムーンショット音楽芸術を地球全体で共創します
        </p>
        <Link to="/message" className={landingStyles.link}>
          [ READ MORE
          <svg
            width="63"
            height="18"
            viewBox="0 0 63 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 17H60L47.234 1" stroke="#015C99" strokeWidth="2" />
          </svg>
          ]
        </Link>
      </div>
    </div>
  );
};

export default TopComponent;
