import React from "react";
import classNames from "classnames/bind";
import styles from "./DirectMess.module.scss";
import { TbHash } from "react-icons/tb";
import Avatar from "src/components/Avatar/Avatar";
import Button from "src/components/Button/Button";

const cx = classNames.bind(styles);
function DirectMess({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={cx("wrapper")}>
      <Avatar className={cx("avatar")} />
      <h3 className={cx("welcome")}>Phú Bùi</h3>
      <div className={cx("text")}>
        This is the beginning of your direct message history with @Phú Bùi
      </div>
      <div className={cx("btn")}>
        <Button content="Add Friend" />
        <Button content="Add Friend" color="second" />
        <Button content="Add Friend" color="danger" />
      </div>
    </div>
  );
}

export default DirectMess;
