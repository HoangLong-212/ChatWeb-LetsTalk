import React from "react";
import classNames from "classnames/bind";
import styles from "./Messenger.module.scss";
import { Input } from "antd";
import { GiftFilled, PlusCircleFilled } from "@ant-design/icons";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

const cx = classNames.bind(styles);
function Messenger({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <Input
        style={{ height: "auto", wordWrap: "break-word" }}
        size="large"
        placeholder="large size"
        prefix={<PlusCircleFilled className={cx("icon")} />}
        suffix={
          <div style={{ display: "flex", alignItems: "center" }}>
            <GiftFilled className={cx("icon-suffix")} />
            <PlusCircleFilled className={cx("icon-suffix")} />
            <BsFillEmojiHeartEyesFill className={cx("icon-suffix")} />
          </div>
        }
        onPressEnter={(e) => console.log(e)}
      />
    </div>
  );
}

export default Messenger;
