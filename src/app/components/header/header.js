import React from "react";

import headerStyles from "./header.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Header = ({ onHomeClick }) => (
  <header className={headerStyles.header}>
    <i
      className={`fas fa-home ${headerStyles["home-icon"]}`}
      onClick={onHomeClick}
    ></i>
    <div className={headerStyles["header-text"]}>Slokas</div>
  </header>
);
export default Header;
