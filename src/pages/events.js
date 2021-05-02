import React from "react";
import Layout from "../layout/layout";

// uncomment the following for implementing events
import ArticleRoll from "../components/ArticleRoll";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import eventStyles from "../styles/pages/events.module.scss";
// import eventsData from "../data/events.json";
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
      event_arrow: file(relativePath: { eq: "event_arrow.png" }) {
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
      events: allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {frontmatter: {category: {eq: "event"}}}
      ) {
        edges{
          node{
            frontmatter{
              title
              date
              category
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt (pruneLength: 50)
          }
        }
      }
    }
  `);
  const eventsData = data.events.edges;
  return (
    <Layout>
      <div className={eventStyles.container}>
        <div className={eventStyles.topSection}>
          <h2 className={eventStyles.titleLarge}>Events</h2>
            <div className={eventStyles.articles}>
              {eventsData.map((obj) => (
                <EventComponent
                  key={obj.node.frontmatter.index}
                  title={obj.node.frontmatter.title}
                  slug={obj.node.fields.slug}
                  date={obj.node.frontmatter.date}
                  category={obj.node.frontmatter.category}
                  excerpt={obj.node.excerpt}
                  fluid={obj.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
              ))}
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
