import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import studentStyles from "../styles/components/student.module.scss";

const Student = (props) => {
    const data = useStaticQuery(graphql`
    query {
        honda: file(relativePath: { eq: "students/honda.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leo: file(relativePath: { eq: "students/leo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sakamoto: file(relativePath: { eq: "students/sakamoto.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        samma: file(relativePath: { eq: "students/samma.jpg" }) {
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
      }
  `);
  return (
    <div className={studentStyles.studentMember}>
      <div className={studentStyles.profileContainer}>
        <h3 className={studentStyles.responsibility}>{props.responsibility}</h3>
        <div className={studentStyles.imageContainer}>
        {data[props.image]?<Img fluid={data[props.image].childImageSharp.fluid} />:"no image"}
        </div>
      </div>
      <div className={studentStyles.text}>
        <div className={studentStyles.identity}>
          <h4 className={studentStyles.name}>{props.name}</h4>
          <small className={studentStyles.position}>
            {props.position}
          </small>
        </div>
        <div className={studentStyles.bio}>
          {props.profile?<p className={studentStyles.paragraph}>{props.profile}</p>:<></>}
        </div>
      </div>
    </div>
  );
};

export default Student;
