import React from "react";
import classNames from "classnames/bind";
import styles from "./Channel.module.scss";
import { RiArrowDownSLine, RiAddLine } from "react-icons/ri";
import ChannelItem from "./ChannelItem/ChannelItem";
import { useDispatch } from "react-redux";
import { createTextChannelModalActions } from "src/redux/slice/createTextChannelModalSlice";
import CreateTextChannelModal from "../Modal/CreateTextChannelModal/CreateTextChannelModal";

const cx = classNames.bind(styles);
function Channel({ className, listTextChannels }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  const dispatch = useDispatch();
  const openTextChannelModal = () => {
    dispatch(createTextChannelModalActions.showModal());
  };
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
          onClick={openTextChannelModal}
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
      <CreateTextChannelModal />
    </div>
  );
}

export default Channel;
