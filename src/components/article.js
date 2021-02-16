import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";

const Article = (props) => {
  const data = useStaticQuery(graphql`
    query {
      a: file(relativePath: { eq: "earth.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      b: file(relativePath: { eq: "space.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      c: file(relativePath: { eq: "gaia_galaxy.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      d: file(relativePath: { eq: "society.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const index = props.index;
  return (
    <div className={articleStyles.article}>
      <div className={articleStyles.articleImage}>
        <Img
          fluid={data[index].childImageSharp.fluid}
          className={articleStyles.image}
        />
      </div>
      <div className={articleStyles.articleText}>
        <h1 className={articleStyles.articleTitle}>{props.title}</h1>
        <p className={articleStyles.articleDate}>{props.date}</p>
        <small className={articleStyles.articleDescription}>{props.desc}</small>
      </div>
    </div>
  );
};

export default Article;
