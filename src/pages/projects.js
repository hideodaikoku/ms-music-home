import React from "react";
import Layout from "../layout/layout";
import ComingSoonComponent from "../components/coming-soon";

// uncomment the following for implementing events

// import { useStaticQuery, graphql } from "gatsby";
// import Article from "../components/article";
// import Img from "gatsby-image";
// import projectStyles from "../styles/pages/project.module.scss";
// import projectData from "../data/projects.json";

const Projects = (props) => {
  // uncomment the following for implementing events
  // const data = useStaticQuery(graphql`
  //   query {
  //     top: file(relativePath: { eq: "blue-texture.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  // const articleData = projectData.slice(0).reverse();
  return (
    <Layout>
      <ComingSoonComponent />
      {/* 
      // uncomment the following for implementing events
      <div className={projectStyles.container}>
        <div className={projectStyles.topSection}>
          <h2 className={projectStyles.titleLarge}>Projects</h2>
          <div className={projectStyles.imageContainer}>
            <Img
              fluid={data.top.childImageSharp.fluid}
              className={projectStyles.image}
            />
            <small className={projectStyles.copyright}>
              &copy; Hazuki Ota, 2021
            </small>
            <h2 className={projectStyles.titleText}>
              <span style={{backgroundColor:"red", padding:"0 .5rem"}}>New</span>
              <strong className={projectStyles.latest}>プロジェクト: </strong>
              {articleData[0].title}
            </h2>
            <small className={projectStyles.date}>{articleData[0].date}</small>
            <div className={projectStyles.desc}>{articleData[0].desc}</div>
          </div>
          <div className={projectStyles.articles}>
            {projectData.map((obj) => (
              <Article
                key={obj.index}
                title={obj.title}
                date={obj.date}
                desc={obj.desc}
                index={obj.index}
              />
            ))}
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Projects;
