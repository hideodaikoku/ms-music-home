import React from "react";
import messageStyles from "../styles/components/message.module.scss";

const Message = () => {
  return (
    <>
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

      <section className={messageStyles.messageSection}>
        <h2 className={messageStyles.messageTitle}>
            2050年の社会における音楽芸術はどのようなものでしょうか
        </h2>
        <p className={messageStyles.messageText}>
        音楽でひとびとを幸せにしたい。ポストコロナ時代における芸術の重要性を再認識いたしました。<br/>
        そのためには、国内では、音楽と科学の分断を解消し、もっと強く結び付ける必要があります。
        また、西洋音楽に偏った研究だけではなく、人類全体の音楽が視野に入れるべきでしょう。
        <br/><br/>
        これらの状況を打破し、人類全体の幸福と持続可能な社会を実現するために、私たちは、2050年に地球規模の音楽芸術祭「GAIA」を開催するというビジョンを描きました。
        <br/><br/>
        その実現には、４つの科学技術が必要と考えます。<br/>
        一つ目は、五感の境界を超越する音楽。 ２つ目は身体の制約を超越する音楽。<br/>
        ３つ目は生物間の境界を超越する音楽。<br/>
        ４つ目は惑星間の境界を超越する音楽です。<br/>
        芸術科学立国を成し遂げ、超越感動音楽芸術を地球全体で共創します。
        地球全体で超越感動音楽を創造し、芸術科学立国を成し遂げ、地球文化の普遍性を宇宙に響鳴させます。
        <br/><br/>
        このビジョンとそのための調査計画は、ムーンショット・ミレニア目標調査に採択されました。
        2021年1月より半年かけて、私たちのビジョンの実現に必要なロードマップを策定するために、調査研究をおこなってまいります。
        神経科学・生物心理学・情報科学に加え、他の自然科学、人文・社会科学や医学、宇宙科学の研究者や有識者のチームを構成し、
        一丸となって、目標実現に向けた活動を展開します。
        <br/><br/>
        市民のみなさまの協力が必要不可欠です。<br/>
        みなさまとともにビジョンの実現に向かって邁進いたします。<br/>
        <br/>
        <em>
            <strong>西本MS音楽感動共創プロジェクト</strong><br/>
            チームリーダー <br/>
            西本智実
        </em>
        </p>
      </section>
    </>
  );
};

export default Message;
