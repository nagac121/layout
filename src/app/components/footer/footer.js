import React from "react";

import footerStyles from "./footer.module.scss";

export const Footer = () => (
  <footer className={footerStyles.footer}>
    &copy; {new Date().getFullYear()} Slokas. All rights reserved.
  </footer>
);
export default Footer;
