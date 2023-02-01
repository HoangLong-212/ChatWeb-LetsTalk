import React from "react";
import classNames from "classnames/bind";
import styles from "./FriendListItem.module.scss";
import Avatar from "../Avatar/Avatar";
import {
  RiMessage2Fill,
  RiMore2Fill,
  RiCheckLine,
  RiCloseLine,
} from "react-icons/ri";
import UserPending from "./UserPending/UserPending";

const cx = classNames.bind(styles);
function FriendListItem({ className }) {
  const classes = cx("FriendListItem", {
    [className]: className,
  });
  return (
    <div className={cx("peopleListItem")}>
      <div className={cx("content")}>
        <UserPending />
        <div className={cx("action")}>
          <div className={cx("actionBtn")}>
            <RiMessage2Fill style={{ width: 20, height: 20 }} />
            {/* {/ <RiCheckLine style={{ width: 20, height: 20 }} /> /} */}
          </div>
          <div className={cx("actionBtn")}>
            <RiMore2Fill style={{ width: 20, height: 20 }} />
            {/* {/ <RiCloseLine style={{ width: 20, height: 20 }} /> /} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendListItem;
