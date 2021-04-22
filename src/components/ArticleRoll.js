import React from "react";
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";
import { useStaticQuery, graphql } from "gatsby";

// function renderImage(file) {
//   return (
//     <Img fluid={file.node.childImageSharp.fluid} />
//   )
// }

const ArticleRoll = ({key, slug, title, date, category, excerpt, fixed}) => {
  
  return (
    <div className={articleStyles.article}>
      <div className={articleStyles.articleImage}>
        <Img
          fixed={fixed}
          className={articleStyles.image}
        />
      </div>
      <div className={articleStyles.articleText}>
        <h1 className={articleStyles.articleTitle}>{title}</h1>
        <p className={articleStyles.articleDate}>{date}</p>
        <small className={articleStyles.articleDescription}>{excerpt}</small>
      </div>
    </div>
  );
};

export default ArticleRoll;
