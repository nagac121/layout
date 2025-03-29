import React, { useState } from "react";
import categoriesData from "../../data/sloka-links.json";
import sidebarStyles from "./sidebar.module.css";

const Sidebar = ({ onSelectSloka }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSlokamClick = (path) => {
    onSelectSloka(path);
  };

  return (
    <nav className={sidebarStyles.sidebar}>
      <ul>
        {Object.keys(categoriesData).map((category) => (
          <li key={category}>
            <div onClick={() => toggleCategory(category)}>
              {expandedCategories[category] ? "-" : "+"}{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            {expandedCategories[category] && (
              <ul>
                {categoriesData[category].map((subCategory, index) => (
                  <li key={index} onClick={() => handleSlokamClick(subCategory.path)}>
                    {subCategory.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
