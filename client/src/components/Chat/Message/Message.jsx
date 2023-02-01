import React from "react";
import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Avatar from "src/components/Avatar/Avatar";

const cx = classNames.bind(styles);
function Message({ className, onlyText = false, mess, img = false }) {
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
              <Avatar className={cx("avatar")} imgUrl={mess?.avatarUrlAuthor} />
              <h3 className={cx("header")}>
                <span className={cx("headerText")}>
                  <span className={cx("username")}>{mess?.authorName}</span>
                </span>
                <span className={cx("timestamp")}>Yesterday at 10:53 AM</span>
              </h3>

              {img ? (
                <div className={cx("imgMessage")}>
                  <div className={cx("messageAttachment")}>
                    <div className={cx("imageContent")}>
                      <div className={cx("imageContainer")}>
                        <div className={cx("imageWrapper")}>
                          <img alt="" src={mess?.content} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={cx("message")}>{mess?.content}</div>
              )}
            </>
          ) : (
            <div className={cx("message")}>{mess?.content}</div>
          )}
        </div>
      </div>
    </li>
  );
}

export default Message;
