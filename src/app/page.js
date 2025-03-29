"use client";

import React, { useState, useEffect } from "react";
import Layout from "./home";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Sloka from "./components/sloka/sloka";
import DefaultContent from "./components/default-content/default-content";
import "./global.scss";
import Footer from "./components/footer/footer";

const HomePage = () => {
  const [selectedSloka, setSelectedSloka] = useState(null);

  const handleHomeClick = () => {
    setSelectedSloka(null);
  };

  return (
    <Layout>
      <Header onHomeClick={handleHomeClick} />
      <div className="page-content">
        <div className="content-container">
          <Sidebar onSelectSloka={setSelectedSloka} />
          <main className="sloka-content">
            {selectedSloka ? (
              <Sloka fileName={selectedSloka} />
            ) : (
              <DefaultContent />
            )}
          </main>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default HomePage;
