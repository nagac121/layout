import React from "react";
import "./global.scss";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="root">{children}</body>
    </html>
  );
};

export default Layout;
