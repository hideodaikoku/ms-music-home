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

        <div className={landingStyles.verticalLine}>
          <h4 className={landingStyles.subtext}>
            ムーンショット型研究開発制度とは
          </h4>
          <div className={landingStyles.desc}>
            本プロジェクトは大胆な発想に基づく挑戦的な研究開発（ムーンショット）を推進する内閣府の制度、ムーンショット型研究開発制度の新たな目標検討のためのビジョン策定（ミレニア・プログラム）の目標検討チームです。
          </div>
          <div className={landingStyles.link}>
            <Link to="https://www.jst.go.jp/moonshot/program/millennia.html">
              <TopPageArrow stroke="#015C99" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
