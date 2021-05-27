import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import memberStyles from "../styles/components/member.module.scss";

const Member = (props) => {
  const data = useStaticQuery(graphql`
    query {
      bando: file(relativePath: { eq: "students/bando.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      haruka: file(relativePath: { eq: "students/haruka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homma: file(relativePath: { eq: "students/homma.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jun: file(relativePath: { eq: "students/jun.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miku: file(relativePath: { eq: "students/miku.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nakahara: file(relativePath: { eq: "students/nakahara.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ozaki: file(relativePath: { eq: "students/ozaki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sakakibara: file(relativePath: { eq: "students/sakakibara.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sotaro: file(relativePath: { eq: "students/sotaro.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tanaka: file(relativePath: { eq: "students/tanaka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      koshiishi: file(relativePath: { eq: "students/koshiishi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miyachi: file(relativePath: { eq: "students/miyachi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hondou: file(relativePath: { eq: "students/hondou.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={memberStyles.memberMember}>
      <div className={memberStyles.profileContainer}>
        <div className={memberStyles.imageContainer}>
          {data[props.image] ? (
            <Img fluid={data[props.image].childImageSharp.fluid} />
          ) : (
            "no image"
          )}
        </div>
        <div className={memberStyles.identity}>
          <h4 className={memberStyles.name}>{props.name}</h4>
          <small className={memberStyles.position}>{props.position}</small>
          <h3 className={memberStyles.responsibility}>
            {props.responsibility}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Member;
