import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Message from "../components/message";
import Goals from "../components/goals";
import Initiatives from "../components/initiatives";
import Partners from "../components/partners";
import Teams from "../components/teams";
import Events from "../components/events";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero/>
      <Message/>
      <Goals/>
      <Initiatives/>
      <Partners/>
      <Teams/>
      <Events/>
    </Layout>
  );
};

export default IndexPage;
