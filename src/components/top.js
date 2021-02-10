import React from "react";
import { Link } from "gatsby";
import topStyles from "../styles/components/top.module.scss";

// import Img from "gatsby-image";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 1000,
  pauseOnDotsHover: true,
  pauseOnHover: true,
};

const TopComponent = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     image1: file(relativePath: { eq: "blue-texture.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1024) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     image2: file(relativePath: { eq: "society.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1024) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div className={topStyles.container}>
      {/* <Slider {...settings} className="overflow-hidden">
        <div className={topStyles.imageContainer}>
          <Img fluid={data.image1.childImageSharp.fluid} />
        </div>
      </Slider> */}
      <div className={topStyles.textOverlay}>
        <h3 className={topStyles.title}>MS音楽感動共創プロジェクト</h3>
        <h4 className={topStyles.subtext}>2050年 芸術科学立国を成し遂げ
          <br/>ムーンショット音楽芸術を地球全体で共創します
        </h4>
        <Link to="/message" className={topStyles.link}>
        [ READ MORE 
        <svg width="63" height="18" viewBox="0 0 63 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 17H60L47.234 1" stroke="#015C99" stroke-width="2"/>
        </svg>
        ]
        </Link>
      </div>
    </div>
  );
};

export default TopComponent;
