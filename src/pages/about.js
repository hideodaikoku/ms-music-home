import React from "react";
import Layout from "../layout/layout";
import aboutStyles from "../styles/pages/about.module.scss";
import Item from "../components/item";
import missionData from "../data/mission.json";

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.topTitle}>
          <h1 className={aboutStyles.vision}>VISION 2050</h1>
          <div className={aboutStyles.overlay}>
            <p id={aboutStyles.top}>
              We will achieve an arts and sciences nation and co-create the
              moonshot musical art with the entire earth.
            </p>
            <br/>
            <p id={aboutStyles.bottom}>
              It is an inspiring musical art that unites all life on earth and
              echoes the universality of earth culture to the universe.
            </p>
          </div>
          <div className={aboutStyles.subtextJp}>
            <p>
              私たちは、芸術科学立国を成し遂げ、ムーンショット音楽芸術を地球全体で共創します。
              <br />
              全地球生命が一体となり、地球文化の普遍性を宇宙に響鳴させる感動の音楽芸術です。
            </p>
          </div>
        </div>
        <div className={aboutStyles.explanation}>
          <div className={aboutStyles.paragraph}>
            私たちが描く２０５０年への社会像は全地球人が利他の志に胸躍らせながら、ムーンショット音楽芸術祭の開催を目指して、<br/>
            超越感動芸術創造のために一丸となって科学技術開発を行う姿である。
            その先導を日本が切り拓く。<br/><br/>
            具体的な数値目標として、２０５０ 年までに日本の音楽科学研究の生産性を現在よりも１４倍以上向上させ、<br/>
            音楽科学分野の学術論文数において日本が世界第１位となり、<br/>
            世界トップの音楽科学技術大国になる。<br/>
            その研究成果によって、２０５０ 年の社会で以下つの科学技術を実現します。
          </div>
        </div>
      </div>
      <div className={aboutStyles.cards}>
        {missionData.map((obj) => (
          <Item
            key={obj.index}
            title={obj.title}
            ja={obj.ja}
            index={obj.index}
          />
        ))}
      </div>
      <div className={aboutStyles.bottomText}>
      上記4 つの科学技術は、芸術文化が本来持つ本質的価値を大きく引き出し、ポストコロナ時代における人々の豊かな創造性、感性、表現力、共感、相互理解、人間性を存分に涵養させ、人類社会の持続と幸福を可能にする。
      </div>
    </Layout>
  );
};

export default About;
