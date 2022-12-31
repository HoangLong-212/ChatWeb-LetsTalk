import React from "react";
import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Avatar from "src/components/Avatar/Avatar";

const cx = classNames.bind(styles);
function Message({ className, onlyText = false }) {
  const classes = cx("wrapper", {
    [className]: className,
    mrTop: !onlyText,
  });
  return (
    <li className={cx("messageListItem")}>
      <div className={classes}>
        <div className={cx("content")}>
          {!onlyText ? (
            <>
              <Avatar className={cx("avatar")} />
              <h3 className={cx("header")}>
                <span className={cx("headerText")}>
                  <span className={cx("username")}>Long Tran</span>
                </span>
                <span className={cx("timestamp")}>Yesterday at 10:53 AM</span>
              </h3>
              <div className={cx("message")}>test</div>
            </>
          ) : (
            <div className={cx("message")}>test</div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Message;
