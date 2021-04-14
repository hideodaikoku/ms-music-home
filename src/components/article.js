import React from "react";
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";
import Thumbnail from  "../components/thumbnail";

const Article = (props) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     a: file(relativePath: { eq:  }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  const index = props.index;
  console.log(props.thumbnail)
  return (
    <div className={articleStyles.article}>
      <div className={articleStyles.articleImage}>
        {/* <Img
          fluid={props.thumbnail}
          className={articleStyles.image}
        /> */}
        <Thumbnail path={props.thumbnail} />
        
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
