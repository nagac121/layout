import React, { useEffect, useState } from "react";
import slokaStyles from "./sloka.module.css";
import FloatingArrow from "../floating-arrow/floating-arrow";

const Sloka = ({ fileName }) => {
  const [slokaData, setSlokaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSloka = async () => {
      setError(null); // Reset error state
      setSlokaData(null); // Reset sloka data state
      try {
        const response = await fetch(`/slokas/${fileName}`);
        if (!response.ok) {
          setError("Sloka is not available.");
          return;
        }
        const data = await response.json();
        setSlokaData(data);
      } catch (error) {
        console.error("Failed to fetch slokam content:", error.message);
        setError("Sloka is not available.");
      }
    };

    fetchSloka();
  }, [fileName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!slokaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={slokaStyles["sloka-title"]}>{slokaData.title}</h1>
      <div className={slokaStyles["sloka-content"]}>
        {slokaData.sloka.map((line, index) =>
          line === "" ? (
            <br key={index} />
          ) : (
            <p key={index} className={slokaStyles["sloka-line"]}>
              {line}
            </p>
          )
        )}
      </div>
      <FloatingArrow />
    </div>
  );
};

export default Sloka;
