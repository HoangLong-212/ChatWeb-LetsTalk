import React from "react";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import Messenger from "./Messenger/Messenger";

const cx = classNames.bind(styles);
function Chat() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("messenger")}>messenger</div>
      <Messenger className={cx("input-mess")} />
    </div>
  );
}

export default Chat;
