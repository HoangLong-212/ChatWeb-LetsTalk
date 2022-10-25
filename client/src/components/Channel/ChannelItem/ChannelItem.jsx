import React from "react";
import classNames from "classnames/bind";
import styles from "./ChannelItem.module.scss";
import { BsFillGearFill } from "react-icons/bs";
import { TbHash } from "react-icons/tb";

const cx = classNames.bind(styles);
function ChannelItem({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("main-content")}>
          <TbHash style={{ fontSize: 20, marginRight: 4 }} />
          <p>Channel</p>
        </div>
        <BsFillGearFill className={cx("icons-add-channel-item")} />
      </div>
    </div>
  );
}

export default ChannelItem;
