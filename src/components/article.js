import React from "react";
import Img from "gatsby-image";
import articleStyles from "../styles/components/article.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Thumbnail from  "../components/thumbnail";

// function renderImage(file) {
//   return (
//     <Img fluid={file.node.childImageSharp.fluid} />
//   )
// }

const Article = (props) => {
  // fetch all uploaded images being used as thumbnails
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "uploaded-images" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 600) {
                base64
              }
            }
          }
        }
      }
    }
`);

  // loop thru the images, compare the title with props.thumbnail to display the correct one
  // loop thru the images
  var images = data.images.edges
  for (var i=0; i < images.length; i++){
    console.log("RELATIVE PATH", images[i].node.relativePath)
    // if [i] equals the props.thumbnail
    if ("/images/uploads/"+images[i].node.relativePath == props.thumbnail){
      
    }
  }

  
  
  // render the image of [i]th image

  const index = props.index;
  console.log(props.thumbnail)
  
  return (
    <div className={articleStyles.article}>
      <div className={articleStyles.articleImage}>
        {/* <Img
          fluid={props.thumbnail}
          className={articleStyles.image}
        /> */}
        {/* <Thumbnail path={props.thumbnail} /> */}
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
