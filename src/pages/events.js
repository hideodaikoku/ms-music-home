import React from "react";
import Layout from "../layout/layout";

import ComingSoonComponent from "../components/coming-soon";

// uncomment the following for implementing events
// import Article from "../components/article";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
// import eventStyles from "../styles/pages/events.module.scss";
// import eventsData from "../data/events.json";

const Events = (props) => {
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
  // const articleData = eventsData.slice(0).reverse();
  return (
    <Layout>
      <ComingSoonComponent/>
      {/* <div className={eventStyles.container}>
        <div className={eventStyles.topSection}>
          <h2 className={eventStyles.titleLarge}>Events</h2>
          <div className={eventStyles.imageContainer}>
            <Img
              fluid={data.top.childImageSharp.fluid}
              className={eventStyles.image}
            />
            <small className={eventStyles.copyright}>
              &copy; Hazuki Ota, 2021
            </small>
            <h2 className={eventStyles.titleText}>
              <span style={{backgroundColor:"red", padding:"0 .5rem"}}>New</span>
              <strong className={eventStyles.latest}>イベント: </strong>
              {articleData[0].title}
            </h2>
            <small className={eventStyles.date}>{articleData[0].date}</small>
            <div className={eventStyles.desc}>{articleData[0].desc}</div>
          </div>
          <div className={eventStyles.articles}>
            {articleData.map((obj) => (
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

export default Events;
