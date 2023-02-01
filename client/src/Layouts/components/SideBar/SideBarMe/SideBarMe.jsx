import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SideBarMe.module.scss";
import SideBarHomeItem from "src/components/SideBarHomeItem/SideBarHomeItem";

const cx = classNames.bind(styles);
function SideBarMe({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });

  return (
    <div className={cx("inner")}>
      <div className={cx("header-Sidebar")}></div>
      <div className={cx("container")}>
        <div aria-hidden="true" style={{ height: "8px" }}></div>
        <SideBarHomeItem />
        <div className={cx("DM")}>
          <span>DIRECT MESSSAGES</span>
        </div>
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
        <SideBarHomeItem avatar />
      </div>
    </div>
  );
}

export default SideBarMe;
