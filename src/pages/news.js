import React from "react";
import Layout from "../layout/layout";
// import ReactDOM from "react-dom";

// uncomment the following for implementing news
import ArticleRoll from "../components/ArticleRoll";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import newsStyles from "../styles/pages/news.module.scss";

const News = (props) => {
  // uncomment the following for implementing events
  const data = useStaticQuery(graphql`
    query {
      tempnews: file(relativePath: { eq: "temporary-news-site.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { category: { eq: "news" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              category
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `);

  // // const articleData = newsData.slice(0).reverse();
  const articleData = data.posts.edges;
  // // console.log(articleData);

  //date format for the featured article
  const dateOnly = articleData[0].node.frontmatter.date.split("T")[0];

  return (
    <Layout>
      {/* uncomment the following for implementing news */}
      <div className={newsStyles.container}>
        <div className={newsStyles.topSection}>
          <h2 className={newsStyles.titleLarge}>News</h2>
          <div className={newsStyles.imageContainer} onClick>
            <Link to={articleData[0].node.fields.slug}>
              <Img
                fluid={
                  articleData[0].node.frontmatter.thumbnail.childImageSharp
                    .fluid
                }
                className={newsStyles.image}
              />
            </Link>
            <h2 className={newsStyles.titleText}>
              <span style={{ backgroundColor: "red", padding: "0 .5rem" }}>
                New
              </span>
              <strong className={newsStyles.latest}>
                {" "}
                {articleData[0].node.frontmatter.title}{" "}
              </strong>
            </h2>
            <small className={newsStyles.date}>{dateOnly}</small>
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
                excerpt={obj.node.excerpt}
                fluid={obj.node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
