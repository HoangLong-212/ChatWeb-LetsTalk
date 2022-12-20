import React from "react";
import classNames from "classnames/bind";
import styles from "./Channel.module.scss";
import { RiArrowDownSLine, RiAddLine } from "react-icons/ri";
import ChannelItem from "./ChannelItem/ChannelItem";

const cx = classNames.bind(styles);
function Channel({ className, listTextChannels }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("main-content")}>
          <RiArrowDownSLine style={{ fontSize: 17, padding: 2 }} />
          <p>TEXT CHANNEL</p>
        </div>
        <RiAddLine
          className={cx("icons-add-channel-item")}
          style={{ fontSize: 20 }}
        />
      </div>
      {listTextChannels?.map((textChannel) => (
        <ChannelItem
          key={textChannel._id}
          dataChannel={textChannel}
          channelId={textChannel._id}
        />
      ))}
      {/* <ChannelItem />
      <ChannelItem /> */}
    </div>
  );
}

export default Channel;
