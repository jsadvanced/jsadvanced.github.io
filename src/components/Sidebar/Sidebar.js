import React from "react";
import { FaBeer } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

import { MAIN_MENU_ID } from "../../utils/constants";
import { useGetMenuQuery } from "../../redux/services/notionApi";

import Logo from "../Logo/Logo";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { data, isLoading } = useGetMenuQuery(MAIN_MENU_ID);
  return (
    <aside>
      <div className={styles.top}>
        <Logo />
        <div className={styles.close}>
          <FaBeer />
        </div>
      </div>
      <div className={styles.sidebar}>
        {isLoading ? (
          <Skeleton count={4} height={48} style={{ marginBottom: "10px" }} />
        ) : (
          data?.map(item => {
            return (
              <button key={item.menuId} className={`${styles.active} btn-small btn-block`}>
                <h3>{item.menuTitle}</h3>
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
}
