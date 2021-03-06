import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/seo";
import TopComponent from "../components/top";
import AboutComponent from "../components/about";
import NewsComponent from "../components/news";
import EventLandingComponent from "../components/eventLandingComponent";
import ContactComponent from "../components/contactComponent";
import TeamComponent from "../components/team";
import SurveyComponent from "../components/survey";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <TopComponent />
      <AboutComponent />
      <NewsComponent />
      <EventLandingComponent />
      <SurveyComponent />
      <TeamComponent />
      <ContactComponent />
    </Layout>
  );
};

export default IndexPage;
