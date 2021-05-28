import React from "react";
import Layout from "../layout/layout";
import contactStyles from "../styles/pages/contact.module.scss";

const Contact = () => {
  return (
    <Layout>
      <div className={contactStyles.container}>
        <h2 className={contactStyles.titleLarge}>Contact</h2>
        <ul className={contactStyles.caution}>
          <strong>注意</strong>
          <li>
            私たちの取り組みについてのお問合せは、下記フォームより必要事項を記入してお送りください。
          </li>
          <li>お名前やメールアドレスに誤りのないようご注意ください。</li>
          <li>
            なお、お問い合わせ内容によっては返信に時間を要する場合や、返信そのものを差し控えさせて頂く場合がございますことをあらかじめご了承ください。
          </li>
        </ul>
        <div className={contactStyles.formContainer}>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" className={contactStyles.label}>
              名前<sup>*</sup>
            </label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email" className={contactStyles.label}>
              メールアドレス<sup>*</sup>
            </label>
            <input type="email" id="email" name="email" />
            <br />

            <label htmlFor="subject" className={contactStyles.label}>
              題名<sup>*</sup>
            </label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="message">
              お問い合わせ内容<sup>*</sup>
            </label>
            <textarea type="text" id="message" name="message" rows="5" />

            <button className={contactStyles.submit}>送信</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
