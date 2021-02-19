import React from "react";
import footerStyles from "../styles/layout/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.container}>
        <small className={footerStyles.copyright}>&copy; 2021, MS MUSIC PROJECT</small>
      </div>
    </footer>
  );
};

export default Footer;
