import React from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import Channel from "src/components/Channel/Channel";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillGearFill, BsHeadphones } from "react-icons/bs";
import { MdMic } from "react-icons/md";

const cx = classNames.bind(styles);
function SideBar({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("header-Sidebar")}>
          <p>Long Tran's server</p>
          <RiArrowDownSLine
            style={{
              fontSize: 22,
              color: "#d5d6d7",
            }}
          />
        </div>
        <div className={cx("container")}>
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
        </div>
      </div>
      <div className={cx("panels")}>
        <div className={cx("inner-panels")}>
          <div className={cx("avatar-wrapper")}>
            <div className={cx("avatar")}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className={cx("name-tag")}>
              <div className={cx("username")}>Long Tran</div>
              <div className={cx("sub-text")}>#1187</div>
            </div>
          </div>
          <div className={cx("avatar-settings")}>
            <div className={cx("icon-settings")}>
              <MdMic className={cx("icon")}  />
            </div>
            <div className={cx("icon-settings")}>
              <BsHeadphones className={cx("icon")} />
            </div>
            <div className={cx("icon-settings")}>
              <BsFillGearFill className={cx("icon")} style={{fontSize: 17 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
