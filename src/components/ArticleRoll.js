import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";

const ArticleRoll = ({key, slug, title, date, category, excerpt, fixed}) => {
  
  // date format

  const dateOnly = date.split('T')[0];
  return (
    <div key={key}>
        <div className={articleStyles.article}>
          <Link to={slug} > 
            <div className={articleStyles.articleImage}>
              <Img
                fixed={fixed}
                className={articleStyles.image}
              />
            </div>
          </Link>
          <div className={articleStyles.articleText}>
            <h1 className={articleStyles.articleTitle}>{title}</h1>
            <p className={articleStyles.articleDate}>{dateOnly}</p>
            <p className={articleStyles.articleDescription}>{excerpt}</p>
          </div>
        </div>
      
    </div>
  );
};

export default ArticleRoll;
