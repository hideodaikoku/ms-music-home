import React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";

import settings from  "../settings/slider-options.js";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideStyles from "../styles/layout/slideshow.module.scss";


const EventComponent = () => {
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
    <div className={slideStyles.container}>
      <Slider {...settings} className="overflow-hidden">
        <div className={slideStyles.imageContainer}>
            <Img fluid={data.image1.childImageSharp.fluid} />
        </div>
      </Slider>
      <div className={slideStyles.textOverlay}>
        <h2 className={slideStyles.titleLargeBlue}>Event</h2>
        <Link to="/event" className={slideStyles.link}>
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

export default EventComponent;
