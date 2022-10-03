import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import SideBar from "../components/SideBar/SideBar";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <LeftNav className={cx("left-nav")} />
      <div className={cx("base")}>
        <SideBar className={cx("sub-sidebar")} />
        <div className={cx("container")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
