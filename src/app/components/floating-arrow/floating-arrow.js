import React, { useState, useEffect } from "react";
import arrowStyles from "./floating-arrow.module.css";

const FloatingArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    console.log("scrollY:", scrollY);
    setIsVisible(scrollY > 200);
  };

  useEffect(() => {
    let ticking = false;

    console.log("FloatingArrow component rendered");

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
      console.log("scroll event triggered");
      toggleVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    console.log("Event listener added for scroll");

    toggleVisibility(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log("Scrolling to top...");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Scroll the page content container
    document.querySelector(".page-content")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Ensure scrolling works on all browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div
      className={`${arrowStyles.floatingArrow} ${
        isVisible ? arrowStyles.visible : ""
      }`}
      onClick={scrollToTop}
    >
      <div className={arrowStyles.arrow}>{"\u2191"}</div>
    </div>
  );
};

export default FloatingArrow;
