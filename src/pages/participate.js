import React from "react";
import Layout from "../layout/layout";
import ComingSoonComponent from "../components/coming-soon";
import participateStyles from "../styles/pages/participate.module.scss";

const Participate = (props) => {
  return (
    <Layout>
      <div className={participateStyles.container}>
        <div className={participateStyles.actionTitle}>
          <h1 className={participateStyles.action}>アンケート参加</h1>
          <ComingSoonComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Participate;
