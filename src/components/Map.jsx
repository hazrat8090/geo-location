import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const naivgat = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat") || "no latitude vlaue";
  const lng = searchParams.get("lng") || "no langitude value";

  return (
    <div className={styles.mapContainer} onClick={() => naivgat("form")}>
      <h1>Map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        change pos
      </button>
    </div>
  );
};

export default Map;
