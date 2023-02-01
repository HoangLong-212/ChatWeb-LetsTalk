import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderFriend.module.scss";
import { HiInbox, HiQuestionMarkCircle } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function HeaderFriend({ className }) {
  const icons = [HiInbox, HiQuestionMarkCircle];
  const navigate = useNavigate();
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <FaUserFriends
            style={{ fontSize: 24, margin: "0 8px", opacity: 0.4 }}
          />
          <span className={cx("text")}>Friends</span>
        </div>
        <div className={cx("divider")}></div>
        <div className={cx("tabBar")}>
          <div className={cx("item")} onClick={() => navigate("/@me/online")}>
            Online
          </div>
          <div className={cx("item")} onClick={() => navigate("/@me")}>All</div>
          <div className={cx("item")} onClick={() => navigate("/@me/pending")}>
            Pending
          </div>
          <div className={cx("item")}>Blocked</div>
          <div className={cx("item", "addFriend")}>
            <span>Add Friend</span>
          </div>
        </div>
      </div>
      <div className={cx("toolbar")}>
        {icons.map((Icon, i) => (
          <Icon key={i} className={cx("icon")} />
        ))}
      </div>
    </div>
  );
}

export default HeaderFriend;
