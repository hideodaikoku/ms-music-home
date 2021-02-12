import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";

import settings from "../settings/slider-options.js";
import landingStyles from "../styles/layout/landing.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "blue-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "society.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.slideShow}>
        <Slider {...settings} className="overflow-hidden">
          <div className={landingStyles.imageContainer}>
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </Slider>
      </div>
      <div className={landingStyles.textOverlay}>
        <h2 className={landingStyles.titleLarge}>Team</h2>
        <Link to="/team" className={landingStyles.link}>
          [ READ MORE
          <svg
            width="63"
            height="18"
            viewBox="0 0 63 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 17H60L47.234 1" stroke="#015C99" stroke-width="2" />
          </svg>
          ]
        </Link>
      </div>
    </div>
  );
};

export default TeamComponent;
