import React from "react";
import Layout from "../layout/layout";
import join_usStyles from "../styles/pages/join-us.module.scss";

const JoinUs = () => {
  return (
    <Layout>
      <h2>Join Us</h2>
      <div className={join_usStyles.container}>
        <form label="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <label htmlFor="name">名前</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" />

          <br></br>
          <label htmlFor="subject">題名</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">お問い合わせ内容</label>
          <textarea type="text" id="message" name="message" rows="5" />

          <button type="submit" value="送信" />
        </form>
      </div>
    </Layout>
  );
};

export default JoinUs;
