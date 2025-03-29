import React from "react";
import defaultContentStyles from "./default-content.module.css";

const DefaultContent = () => {
  return (
    <div className={defaultContentStyles["default-content"]}>
      <img
        src="/images/ganapathi.jpg"
        alt="Ganapathi"
        className={defaultContentStyles["ganapathi-image"]}
      />
      <p className={defaultContentStyles["ganapathi-text"]}>
        Om Maha Ganadhipataye Namah
      </p>
    </div>
  );
};

export default DefaultContent;
