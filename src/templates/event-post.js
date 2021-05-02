import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/layout"
import Img from "gatsby-image"
import quarantineBlogStyle from "../styles/template/quarantineblog.module.scss"

// import {GatsbyImage, getImage} from "gatsby-plugin-image"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail{
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
const BlogPost = (props) => {
  const slug = props.data.markdownRemark.frontmatter.slug;
  const title = props.data.markdownRemark.frontmatter.title;

  return (
    <Layout color={"white"}>
      <div className={quarantineBlogStyle.container}>
        <div className={quarantineBlogStyle.backButton}>
          <Link to="/event">
            <span className={quarantineBlogStyle.backArr}>&larr;</span> ニューストップへ
          </Link>
        </div>
        <h1>{title}</h1>
        <div
          id="textContainer"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
};

export default BlogPost;

// export default function BlogPost({data}) {
//   const post = data.markdownRemark
//   console.log("thumbnail inside", post.frontmatter.thumbnail.childImageSharp.fixed)
//     return (
//       <Layout>
//         <div>
//           <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} alt="thumbnail" />
//           <h1>{post.frontmatter.title}</h1>
//           <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         </div>
//       </Layout>
//     )
// }

