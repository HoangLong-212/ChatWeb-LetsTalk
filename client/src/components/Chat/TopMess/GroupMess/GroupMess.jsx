import React from "react";
import classNames from "classnames/bind";
import styles from "./GroupMess.module.scss";
import { TbHash } from "react-icons/tb";

const cx = classNames.bind(styles);
function GroupMess({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={cx("topMess")}>
      <div className={cx("icon")}>
        <TbHash />
      </div>
      <h3 className={cx("welcome")}>Welcome to #test!</h3>
      <div className={cx("text")}>This is the start of the #test channel.</div>
    </div>
  );
}

export default GroupMess;
