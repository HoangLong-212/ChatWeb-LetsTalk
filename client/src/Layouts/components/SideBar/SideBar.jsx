import React from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);
function SideBar({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("header-Sidebar")}>header-Sidebar</div>
        <div className={cx("container")}>container</div>
      </div>
      <div className={cx("panels")}>Panels</div>
    </div>
  );
}

export default SideBar;
