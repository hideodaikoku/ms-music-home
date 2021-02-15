import React from "react";
import Layout from "../layout/layout";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import projectStyles from "../styles/pages/project.module.scss";

const Message = () => {
  const data = useStaticQuery(graphql`
  query{
    file(relativePath: {eq: "illustration.png"}){
      childImageSharp {
        fluid(maxWidth: 1024){
          ...GatsbyImageSharpFluid
        }
      }
    }  
  }
  `)
  return (
    <Layout>
      <div className={projectStyles.container}>
        <div className={projectStyles.imageSection}>
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export default Message;
