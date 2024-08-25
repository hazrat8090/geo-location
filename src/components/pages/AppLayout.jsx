import React from "react";
import styles from "./AppLayout.module.css";
import Sidebar from "../Sidebar";
import Map from "../Map";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
