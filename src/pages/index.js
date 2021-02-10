import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/seo";
import TopComponent from "../components/top";
import AboutComponent from "../components/about";
import NewsComponent from "../components/message";
import EventComponent from "../components/news";
import JoinUsComponent from "../components/joinus";
import TeamComponent from "../components/team";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <TopComponent/>
      <AboutComponent/>
      <NewsComponent/>
      <EventComponent/>
      <JoinUsComponent/>
      <TeamComponent/>
    </Layout>
  );
};

export default IndexPage;
