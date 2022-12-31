import React from "react";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import { TbHash } from "react-icons/tb";
import GroupMess from "./TopMess/GroupMess/GroupMess";
import DirectMess from "./TopMess/DirectMess/DirectMess";
import InputMess from "./InputMess/InputMess";
import Message from "./Message/Message";

const cx = classNames.bind(styles);
function Chat() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("messenger")}>
          {/* <GroupMess /> */}
          <DirectMess />
          <Message />
          <div className={cx("divider")}>
            <span className={cx("content")}>December 27, 2022</span>
          </div>
          <Message />
          <Message onlyText />
          <Message onlyText />

          <Message />
          <Message />
          <Message />

          <Message onlyText />
          <Message onlyText />
          <Message onlyText />
          <Message />
          <Message />
          <Message />

          <Message onlyText />
          <Message onlyText />
          <Message onlyText />
          <div className={cx("scrollerSpacer")}></div>
        </div>
      </div>
      <div className={cx("input-mess")}>
        <InputMess />
      </div>
    </div>
  );
}

export default Chat;
