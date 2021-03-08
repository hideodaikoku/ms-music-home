import React from "react";
import Layout from "../layout/layout";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import messageStyles from "../styles/pages/message.module.scss";

const Message = () => {
  const data = useStaticQuery(graphql`
  query{
    file(relativePath: {eq: "illustration.png"}){
      childImageSharp {
        fluid(maxWidth: 1024){
          ...GatsbyImageSharpFluid
        }
      }
    }  
  }
  `)
  return (
    <Layout>
      <div className={messageStyles.container}>
        <section className={messageStyles.messageSection}>
          <h2 className={messageStyles.messageTitle}>
            2050年の社会における音楽芸術はどのようなものでしょうか
          </h2>
          <p className={messageStyles.paragraph}>
            情報技術とグローバル化の急激な進捗により、私たち人間の生き方はどんどん変化しています。しかし、私たちが音楽芸術を愛し必要とすることは、人が人である限り変わらないでしょう。むしろ、人が人であり続ける最後の砦が芸術なのかも知れません。
          </p>

          <p className={messageStyles.paragraph}>
            私たちは、音楽にはコミュニティの分断を解消し、人々の幸福な結びつきを促進する力があると信じています。そこで私たちは、人類全体の幸福と持続可能な社会を実現するために、音楽芸術の科学的研究を推進する、芸術科学立国という理念を提唱します。
          </p>

          <p className={messageStyles.paragraph}>
            この理念の実現のための方策を、神経科学・生物心理学・情報科学に加え、他の自然科学、人文・社会科学や医学、宇宙科学の研究者や有識者のチームを構成し、一丸となって検討していきます。また、社会をより良くするために、研究者や専門家だけでなく、社会全体で考えるための活動を展開していきます。
          </p>

          <h3 className={messageStyles.byline}>MS音楽感動共創プロジェク<br></br>チーム一同</h3>
        </section>
        <div className={messageStyles.imageSection}>
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
