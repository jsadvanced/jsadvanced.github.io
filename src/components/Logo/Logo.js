import React from "react";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.js}>JS</span>
      <span className={styles.advanced}>ADVANCED</span>
    </div>
  );
}
