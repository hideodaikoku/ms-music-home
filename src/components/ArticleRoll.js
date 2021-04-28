import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";

const ArticleRoll = ({key, slug, title, date, category, excerpt, fluid}) => {
  
  // date format

  const dateOnly = date.split('T')[0];
  return (
          <div key={key} className={articleStyles.article}>
            <Link to={slug} > 
              <div className={articleStyles.articleImage}>
                  <Img
                    fluid={fluid}
                    className={articleStyles.image}
                  />
              </div>
            </Link>
            <div className={articleStyles.articleText}>
              <span className={articleStyles.articleTitle}>{title}</span>
              <small className={articleStyles.articleDate}>{dateOnly}</small>
              <span className={articleStyles.articleDescription}>{excerpt}</span>
            </div>
          </div>
  );
};

export default ArticleRoll;
