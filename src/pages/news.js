import React from "react";
import Layout from "../layout/layout";
import ComingSoonComponent from "../components/coming-soon";

// uncomment the following for implementing news
// import Article from "../components/article";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
// import newsStyles from "../styles/pages/news.module.scss";
// import newsData from "../data/news.json";

const News = (props) => {
  // uncomment the following for implementing events
  // const data = useStaticQuery(graphql`
  //   query {
  //     top: file(relativePath: { eq: "blue-texture.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  // const articleData = newsData.slice(0).reverse();
  return (
    <Layout>
      <ComingSoonComponent/>
      {/* 
      // uncomment the following for implementing news
      <div className={newsStyles.container}>
        <div className={newsStyles.topSection}>
          <h2 className={newsStyles.titleLarge}>News</h2>
          <div className={newsStyles.imageContainer}>
            <Img
              fluid={data.top.childImageSharp.fluid}
              className={newsStyles.image}
            />
            <small className={newsStyles.copyright}>
              &copy; Hazuki Ota, 2021
            </small>
            <h2 className={newsStyles.titleText}>
              <span style={{backgroundColor:"red", padding:"0 .5rem"}}>New</span>
              
              <strong className={newsStyles.latest}>ニュース</strong>
              {articleData[0].title}
            </h2>
            <small className={newsStyles.date}>{articleData[0].date}</small>
            <div className={newsStyles.desc}>{articleData[0].desc}</div>
          </div>
          <div className={newsStyles.articles}>
            {articleData.map((obj) => (
              <Article
                key={obj.index}
                title={obj.title}
                date={obj.date}
                desc={obj.desc}
                index={obj.index}
              />
            ))}
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default News;
