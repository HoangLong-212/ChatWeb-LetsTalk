import React from "react";
import classNames from "classnames/bind";
import styles from "./UserPending.module.scss";
import Avatar from "../../Avatar/Avatar";
import { RiMessage2Fill, RiMore2Fill } from "react-icons/ri";

const cx = classNames.bind(styles);
function UserPending({ className }) {
  const classes = cx("FriendListItem", {
    [className]: className,
  });
  return (
    <div className={cx("userInfo")}>
      <Avatar className={cx("avatar")} />
      <div className={cx("text")}>
        <div className={cx("nameTag")}>
          <span className={cx("username")}>Long Tran</span>
        </div>
        <div className={cx("subText")}>
          <span className={cx("status")}>Offline</span>
        </div>
      </div>
    </div>
  );
}

export default UserPending;
