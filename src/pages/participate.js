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
          <div className={participateStyles.subtextJp}>
            <p>
              本プロジェクトでは、広くみなさまのお考えをお伺いし、「音楽と社会」「音楽と生活」「音楽と科学」の関わりや、社会における音楽芸術の価値について一緒に考える機会を創出したいと考えています。そこで、本プロジェクトでは、大規模なアンケート調査を実施し、みなさまの意見をまとめて届けたいと考えています。下記に詳細を記載しておりますので、ご賛同いただけますかたは是非ご回答いただけますと幸いです。
            </p>
          </div>
        </div>
        <div className={participateStyles.explanation}>
          <h2>■ アンケート概要</h2>
          <div className={participateStyles.paragraph}>
            <p>
              このアンケートは、皆様の音楽との関わり方や、音楽の科学についての印象をお聞きするものです。
            </p>
          </div>

          <h2>■ 回答方法</h2>
          <div className={participateStyles.paragraph}>
            <p>
              本実験は全てオンラインにて行います。パソコンやスマートフォンより、下記のオンラインアンケートフォームにアクセスしていただき、画面の表示に従ってアンケートの回答を行ってください。
              アンケートの回答時間は15分～20分程度となります。
            </p>
          </div>
          <h2>■ アンケートフォーム</h2>
          <div className={participateStyles.paragraph}>
            <p>
              <a href="https://keiogsmg.syd1.qualtrics.com/jfe/form/SV_6FPQIdv1C0G1pFs">
                https://keiogsmg.syd1.qualtrics.com/jfe/form/SV_6FPQIdv1C0G1pFs
              </a>
            </p>
          </div>
          <h2>■ 回答期限</h2>
          <div className={participateStyles.paragraph}>
            <p>2021年6月17日（木）23時59分　まで</p>
          </div>
          <h2>■ その他</h2>
          <div className={participateStyles.paragraph}>
            <p>
              いただいたデータは、本プロジェクトの研究目的以外には使用いたしません。また、氏名や住所といった個人を特定できる情報は一切お伺いしません。
              本研究の趣旨にご賛同いただけます方は、是非ご参加いただけますと幸いです。
              研究に関するご質問やご意見、ご要望等がございましたら下記連絡先までご連絡下さい。
              お忙しいところ大変恐縮ではございますが、何卒よろしくお願い申し上げます。
            </p>
          </div>
          <h2>■ お問い合わせ先</h2>
          <div className={participateStyles.paragraph}>
            <p>
              MS目標検討「MS音楽感動共創」プロジェクトチーム
              お問い合わせフォーム(https://ms-music.tokyo/contact)
              よりご連絡いただけますと幸いです。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Participate;
