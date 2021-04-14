import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file) {
  return (
    <Img fluid={file.node.childImageSharp.fluid} />
  )
}

const thumbnail = function (props) {

  return <StaticQuery
    query={graphql`
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
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.relativePath === props.path
      )
      return(renderImage(image))
    }}
  />
}

export default thumbnail;
