import React from "react";
import Layout from "../layout/layout";
import surveyStyles from "../styles/pages/survey.module.scss";

const Survey = () => {
  return (
    <Layout>
      <div className={surveyStyles.container}>
        <div className={surveyStyles.actionTitle}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className={surveyStyles.action}>ACTION</h1>
          <div className={surveyStyles.subtextJp}>
            <p>
              「音楽で人類を幸せにする」という目標に向かい、現在の科学と技術の状況を調査しその過程で「シンポジウム」「ワークショップ」を実施します。また、調査内容にもとづき、現時点で可能な技術かつ30年後の目標に近づく第一歩として体験型「トライアルワークショップ」を実施します。これらをもとに「音楽で人類を幸せにする」目標に向けたロードマップを策定します。
            </p>
          </div>
        </div>
        <div className={surveyStyles.explanation}>
          <h1>■ 科学技術調査</h1>
          <div className={surveyStyles.paragraph}>
            科学動向：音楽の科学に関わるこれまでの研究活動を調べ、各国の動向を把握するとともに、今後の展開についての指針を検討します。
            <br></br>
            技術動向：音楽の科学に関わる技術の発展を調べ上げるとともに、4つの超越を可能にする技術という観点で体系づけることで、ビジョン実現に必要な技術を実装するロードマップを策定します。
            <br></br>
            インタビュー：私たちのビジョンとその実現方策について、著名な研究者や有識者との議論を展開していきます。
          </div>

          <h1>■ 社会調査</h1>
          <div className={surveyStyles.paragraph}>
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

export default Survey;
