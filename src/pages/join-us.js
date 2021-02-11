import React from "react";
import Layout from "../layout/layout";
import join_usStyles from "../styles/components/join-us.module.scss";

const JoinUs = () => {
  return (
    <Layout>
      <h2>Join Us</h2>
      <div className={join_usStyles.container}>
        <form>
          <label for="name">名前</label>
          <input type="text" id="name" name="name" />

          <label for="email">メールアドレス</label>
          <input type="email" id="email" name="email" />

          <br></br>
          <label for="subject">題名</label>
          <input type="text" id="subject" name="subject" />

          <label for="message">お問い合わせ内容</label>
          <textarea type="text" id="message" name="message" rows="5" />

          <input type="submit" value="送信" />
        </form>
      </div>
    </Layout>
  );
};

export default JoinUs;
