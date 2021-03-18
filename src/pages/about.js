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
        {missionData.map((obj) => (
          <Item
            key={obj.index}
            title={obj.title}
            ja={obj.ja}
            index={obj.index}
          />
        ))}
      </div>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.actionTitle}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className={aboutStyles.action}>ACTION</h1>
          <div className={aboutStyles.subtextJp}>
            <p>
              「音楽で人類を幸せにする」という目標に向かい、現在の科学と技術の状況を調査しその過程で「シンポジウム」「ワークショップ」を実施します。また、調査内容にもとづき、現時点で可能な技術かつ30年後の目標に近づく第一歩として体験型「トライアルワークショップ」を実施します。これらをもとに「音楽で人類を幸せにする」目標に向けたロードマップを策定します。
            </p>
          </div>
        </div>
        <div className={aboutStyles.explanation}>
          
          <h1>■ 科学技術調査</h1>
          <div className={aboutStyles.paragraph}>
          科学動向：音楽の科学に関わるこれまでの研究活動を調べ、各国の動向を把握するとともに、今後の展開についての指針を検討します。
          <br></br>
          技術動向：音楽の科学に関わる技術の発展を調べ上げるとともに、4つの超越を可能にする技術という観点で体系づけることで、ビジョン実現に必要な技術を実装するロードマップを策定します。
          <br></br>
          インタビュー：私たちのビジョンとその実現方策について、著名な研究者や有識者との議論を展開していきます。
          </div>

          <h1>■ 社会調査</h1>
          <div className={aboutStyles.paragraph}>
          ワークショップ：小学生・中学生・高校生を対象としたワークショップ「私たちのゴールデンレコードを作ろう」を実施し、未来の社会と音楽芸術の普遍性について共に考えていきます。また、大学生を対象としたワークショップを開催し、未来の社会における音楽と科学の結びつきや具体的な技術方策について共に議論していきます。
          <br></br>
          アンケート調査：大規模な体験型「トライアルワークショップ」アンケートを実施し、音楽と科学の結びつきや、社会における音楽芸術の価値について、体験者の声を集めます。
          <br></br>
          インタビュー：私たちのビジョンとその価値について、著名な芸術家や有識者との議論を展開していきます。
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
