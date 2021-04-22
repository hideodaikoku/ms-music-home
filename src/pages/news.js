import React from "react";
import Layout from "../layout/layout";
import ReactDOM from "react-dom";

// uncomment the following for implementing news
import ArticleRoll from "../components/ArticleRoll";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import newsStyles from "../styles/pages/news.module.scss";


const News = (props) => {
  // uncomment the following for implementing events
  const data = useStaticQuery(graphql`
    query {
      top: file(relativePath: { eq: "blue-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempnews: file(relativePath: { eq: "temporary-news-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              category
              thumbnail {
                childImageSharp {
                  fixed(width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);


  // // const articleData = newsData.slice(0).reverse();
  const articleData = data.posts.edges;
  // // console.log(articleData);
  return (
    <Layout>
      {/* uncomment the following for implementing news */}
      <div className={newsStyles.container}>
        <div className={newsStyles.topSection}>
          <h2 className={newsStyles.titleLarge}>News</h2>
          <div className={newsStyles.imageContainer} onClick>
            <a href="https://sites.google.com/keio.jp/ms-music-news">
            <Img
              fluid={data.tempnews.childImageSharp.fluid}
              className={newsStyles.image}
            />
            </a>
            <small className={newsStyles.copyright}>
              &copy; Hazuki Ota, 2021
            </small>
            <h2 className={newsStyles.titleText}>
              <span style={{backgroundColor:"red", padding:"0 .5rem"}}>New</span>
              <strong className={newsStyles.latest}> {articleData[0].node.frontmatter.title} </strong>
              
            </h2>
            <small className={newsStyles.date}>{articleData[0].node.frontmatter.date}</small>
            <div className={newsStyles.desc}>{articleData[0].node.excerpt}</div>
          </div>
          <div className={newsStyles.articles}>
            {articleData.map((obj) => (
              <ArticleRoll
                key={obj.node.frontmatter.index}
                title={obj.node.frontmatter.title}
                slug={obj.node.fields.slug}
                date={obj.node.frontmatter.date}
                category={obj.node.frontmatter.category}
                excerpt={obj.node.frontmatter.excerpt}
                fixed={obj.node.frontmatter.thumbnail.childImageSharp.fixed}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
