import React from "react";
import Layout from "../layout/layout";
import messageStyles from "../styles/pages/message.module.scss";

const Message = () => {
  return (
    <Layout>
      <div className={messageStyles.container}>
        <section className={messageStyles.title}>
          <h1 className={messageStyles.titleText}>
            西本MS音楽感動共創プロジェクト
          </h1>
          <p className={messageStyles.subtext}>
            2050年 芸術科学立国を成し遂げ
            <br />
            ムーンショット音楽芸術を地球全体で共創します
          </p>
        </section>
      </div>

      <section
        className={messageStyles.messageSection}
      >
        <h2
          className={messageStyles.messageTitle}
        >
          2050年の社会における音楽芸術はどのようなものでしょうか
        </h2>
        <p className={messageStyles.paragraph}>
          音楽でひとびとを幸せにしたい。ポストコロナ時代における芸術の重要性を再認識いたしました。そのためには、国内では、音楽と科学の分断を解消し、もっと強く結び付ける必要があります。また、西洋音楽に偏った研究だけではなく、人類全体の音楽が視野に入れるべきでしょう。
        </p>

        <p className={messageStyles.paragraph}>
          これらの状況を打破し、人類全体の幸福と持続可能な社会を実現するために、私たちは、2050年に地球規模の音楽芸術祭「GAIA」を開催するというビジョンを描きました。
        </p>

        <p className={messageStyles.paragraph}>
          その実現には、４つの科学技術が必要と考えます。1つ目は、五感の境界を超越する音楽。２つ目は身体の制約を超越する音楽。３つ目は生物間の境界を超越する音楽。４つ目は惑星間の境界を超越する音楽です。
        </p>

        <p className={messageStyles.paragraph}>
          芸術科学立国を成し遂げ、超越感動音楽芸術を地球全体で共創します。地球全体で超越感動音楽を創造し、芸術科学立国を成し遂げ、地球文化の普遍性を宇宙に響鳴させます。
        </p>

        <p className={messageStyles.paragraph}>
          このビジョンとそのための調査計画は、ムーンショット・ミレニア目標調査に採択されました。2021年1月より半年かけて、私たちのビジョンの実現に必要なロードマップを策定するために、調査研究をおこなってまいります。神経科学・生物心理学・情報科学に加え、他の自然科学、人文・社会科学や医学、宇宙科学の研究者や有識者のチームを構成し、一丸となって、目標実現に向けた活動を展開します。
          市民のみなさまの協力が必要不可欠です。
        </p>

        <p className={messageStyles.paragraph}>
          みなさまとともにビジョンの実現に向かって邁進いたします。
        </p>
        <h3>MS音楽感動共創プロジェクトチーム</h3>
      </section>
    </Layout>
  );
};

export default Message;
