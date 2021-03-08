import React from "react";
import Layout from "../layout/layout";
import aboutStyles from "../styles/pages/about.module.scss";
import Item from "../components/item";
import actionData from "../data/action.json";

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.topTitle}>
          <h1 className={aboutStyles.vision}>VISION 2050</h1>
          <div className={aboutStyles.subtextJp}>
            <p>
              人類全体の幸福と持続可能な社会を実現するために、芸術科学立国を成し遂げ、2050年に地球文化の普遍性を宇宙に響鳴させる感動の音楽芸術を実現します。
            </p>
          </div>
        </div>
        <div className={aboutStyles.explanation}>
          <div className={aboutStyles.paragraph}>
            私たちが描く2050年への社会像は、全地球人が利他の志に胸躍らせながら、ムーンショット音楽芸術祭の開催を目指して一丸となっている姿です。私たちのプロジェクトでは、この社会像を現実のものにする科学技術を、日本が先導し切り拓くための道筋を検討しています。
          </div>
          <div className={aboutStyles.paragraph}>
            すべてのひとが享受し発信できる感動芸術「超越感動芸術」の創出を目指します。これによって、ポストコロナ時代における人々の豊かな創造性、感性、表現力、共感、相互理解、人間性を存分に涵養させ、人類社会の持続と幸福を可能にすると信じています。そのために、次の4つの観点から現存の科学技術を体系づけ、新たな方針を示すロードマップを作成しています。
          </div>
        </div>
      </div>
      <div className={aboutStyles.cards}>
        {actionData.map((obj) => (
          <Item
            key={obj.index}
            title={obj.title}
            ja={obj.ja}
            index={obj.index}
          />
        ))}
      </div>
      <div className={aboutStyles.bottomText}>
        上記4
        つの科学技術は、芸術文化が本来持つ本質的価値を大きく引き出し、ポストコロナ時代における人々の豊かな創造性、感性、表現力、共感、相互理解、人間性を存分に涵養させ、人類社会の持続と幸福を可能にする。
      </div>
    </Layout>
  );
};

export default About;
