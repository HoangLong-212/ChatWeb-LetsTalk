import React from "react";
import classNames from "classnames/bind";
import styles from "./GroupMess.module.scss";
import { TbHash } from "react-icons/tb";
import { useSelector } from "react-redux";
import { channelDataState$ } from "src/redux/slice/channelDataSlice";

const cx = classNames.bind(styles);
function GroupMess({ className }) {
  const channel = useSelector(channelDataState$);

  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={cx("topMess")}>
      <div className={cx("icon")}>
        <TbHash />
      </div>
      <h3 className={cx("welcome")}>
        Welcome to #{channel?.channel?.name.toLowerCase()}!
      </h3>
      <div className={cx("text")}>
        This is the start of the #{channel?.channel?.name.toLowerCase()}{" "}
        channel.
      </div>
    </div>
  );
}

export default GroupMess;
