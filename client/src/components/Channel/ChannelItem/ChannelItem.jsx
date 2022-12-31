import React from "react";
import classNames from "classnames/bind";
import styles from "./ChannelItem.module.scss";
import { BsFillGearFill } from "react-icons/bs";
import { TbHash } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function ChannelItem({ className, dataChannel, channelId }) {
  let match = useLocation();
  let { serverId } = useParams();
  const navigate = useNavigate();
  let active = false;
  // if (match.pathname === navigate) {
  //   active = true;
  // }
  const classes = cx("wrapper", {
    [className]: className,
  });

  // console.log(match.pathname);
  // console.log("channelId", channelId);
  return (
    <div className={classes}>
      <div
        className={cx("inner")}
        onClick={() => navigate(`/${serverId}/${channelId}`)} // "/serverId /channelID"
      >
        <div className={cx("main-content")}>
          <TbHash style={{ fontSize: 20, marginRight: 4 }} />
          <p>{dataChannel.name}</p>
        </div>
        <BsFillGearFill className={cx("icons-add-channel-item")} />
      </div>
    </div>
  );
}

export default ChannelItem;
