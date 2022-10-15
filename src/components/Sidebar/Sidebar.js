import React from "react";
import { FaBeer } from "react-icons/fa";

import { MAIN_MENU_ID } from "../../utils/constants";
import { useGetMenuQuery } from "../../redux/services/notionApi";
import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { data, isLoading } = useGetMenuQuery(MAIN_MENU_ID);
  console.log(isLoading);
  console.log(data);
  return (
    <aside>
      <div className={styles.top}>
        <Logo />
        <div className={styles.close}>
          <FaBeer />
        </div>
      </div>
      <div className={styles.sidebar}>
        <button className={`${styles.active} btn-small btn-block`}>
          <h3>Dashboard</h3>
        </button>
        <button className="btn-small btn-block">
          <h3>Customers</h3>
        </button>
        <button className="btn-small btn-block">
          <h3>Orders</h3>
        </button>
        <button className="btn-small btn-block">
          <h3>Messages</h3>
        </button>
        <button className="btn-small btn-block">
          <h3>Products</h3>
        </button>
      </div>
    </aside>
  );
}
