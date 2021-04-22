import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";

const ArticleRoll = ({key, slug, title, date, category, excerpt, fixed}) => {
  
  return (
    <div key={key}>
      <Link to={slug} >
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
            <p className={articleStyles.articleDescription}>{excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleRoll;
