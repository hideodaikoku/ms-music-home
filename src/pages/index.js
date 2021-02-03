import React from "react";
import Layout from "../layout/layout";
import SEO from "../components/seo";
import Message from "../components/message";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Message/>
    </Layout>
  );
};

export default IndexPage;
