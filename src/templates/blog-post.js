import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import Img from "gatsby-image"
import quarantineBlogStyle from "../styles/quarantineblog.module.scss";

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

export default function BlogPost({data}) {
  const post = data.markdownRemark
  console.log("thumbnail inside", post.frontmatter.thumbnail.childImageSharp.fixed)
    return (
      <Layout>
        <div>
          <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} alt="thumbnail" />
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
}

