import React from "react";

import styles from "./Main.module.scss";

export default function Main({ children }) {
  return <div className={styles.container}>{children}</div>;
}
