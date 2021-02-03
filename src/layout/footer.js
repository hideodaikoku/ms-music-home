import React from "react";
import footerStyles from "../styles/layout/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.container}>
        <small className={footerStyles.copyright}>&copy; 2021, Keio University Shonan Fujisawa Campus.</small>
      </div>
    </footer>
  );
};

export default Footer;
