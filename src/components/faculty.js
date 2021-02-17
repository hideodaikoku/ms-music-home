import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import facultyStyles from "../styles/components/faculty.module.scss";

const Faculty = (props) => {
  const data = useStaticQuery(graphql`
    query {
      nishimoto: file(relativePath: { eq: "faculty/nishimura_1X1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fujii: file(relativePath: { eq: "faculty/fujii.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tachibana: file(relativePath: { eq: "faculty/tachibana.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      omura: file(relativePath: { eq: "faculty/omura.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      okanoya: file(relativePath: { eq: "faculty/okanoya.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={facultyStyles.facultyMember}>
      <div className={facultyStyles.profileContainer}>
        <h2 className={facultyStyles.responsibility}>{props.responsibility}</h2>
        <div className={facultyStyles.imageContainer}>
          <Img fluid={data[props.image].childImageSharp.fluid} />
        </div>
        <div>
          {props.credit ? (
            <p className={facultyStyles.imageCredit}>{props.credit}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={facultyStyles.text}>
        <div className={facultyStyles.identity}>
          <h3 className={facultyStyles.name}>{props.name}</h3>
          <small className={facultyStyles.position}>
            {props.position}
          </small>
        </div>
        <div className={facultyStyles.bio}>
          <p className={facultyStyles.paragraph}>{props.profile_a}</p>
          <p className={facultyStyles.paragraph}>{props.profile_b}</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
