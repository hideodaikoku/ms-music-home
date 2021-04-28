import React from "react";
import Layout from "../layout/layout";


// uncomment the following for implementing events
import ArticleRoll from "../components/ArticleRoll";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import eventStyles from "../styles/pages/events.module.scss";
import eventsData from "../data/events.json";
import EventComponent from "../components/event.js";

const Events = (props) => {
  // uncomment the following for implementing events  
  const data = useStaticQuery(graphql`
    query {
      top: file(relativePath: { eq: "blue-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempevent: file(relativePath: { eq: "event.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const articleData = eventsData.slice(0).reverse();
  return (
    <Layout>
      <div className={eventStyles.container}>
        <div className={eventStyles.topSection}>
          <h2 className={eventStyles.titleLarge}>Events</h2>
          <div className={eventStyles.imageContainer}>
            <h2 className={eventStyles.titleText}>
            </h2>
            <small className={eventStyles.date}>{articleData[0].date}</small>
            <div className={eventStyles.desc}>{articleData[0].desc}</div>
          </div>
          <div className={eventStyles.articles}>
            {articleData.map((obj) => (
              <EventComponent
                key={obj.index}
                title={obj.title}
                date={obj.date}
                desc={obj.desc}
                index={obj.index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
