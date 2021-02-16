import React from "react";
import Layout from "../layout/layout";
import join_usStyles from "../styles/pages/join-us.module.scss";

const JoinUs = () => {
  return (
    <Layout>
      <div className={join_usStyles.container}>
        <h2 className={join_usStyles.titleLarge}>Join Us</h2>
        <div className={join_usStyles.formContainer}>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" className={join_usStyles.label}>名前<sup>*</sup></label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email" className={join_usStyles.label}>メールアドレス</label>
            <input type="email" id="email" name="email" /><br/>

            <label htmlFor="subject" className={join_usStyles.label}>題名</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">お問い合わせ内容</label>
            <textarea type="text" id="message" name="message" rows="5" />
            

            <button className={join_usStyles.submit}>送信</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUs;
