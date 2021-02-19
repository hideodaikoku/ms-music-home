import React from "react";
import landingStyles from "../styles/layout/landing.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ComingSoonComponent = () => {
  const data = useStaticQuery(graphql`
    query {
        person: file(relativePath: {eq:"red-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        society: file(relativePath: {eq:"green-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        earth: file(relativePath: {eq:"orange-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
        planet: file(relativePath: {eq:"blue-disk.png"}){
            childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
        }
    }
  `);
  var keys = Object.keys(data);
  const imageData = data[keys[ keys.length * Math.random() << 0]];
  return (
    <div className={landingStyles.container}>
    <div className={landingStyles.textOverlay}>
        <h3 className={landingStyles.titleLargeBlue}>COMING SOON</h3>
        <div className={landingStyles.imageContainer}>
        <Img
            fluid={imageData.childImageSharp.fluid}
            className={landingStyles.image}
        />
        </div>
    </div>
    </div>
  );
};

export default ComingSoonComponent;
