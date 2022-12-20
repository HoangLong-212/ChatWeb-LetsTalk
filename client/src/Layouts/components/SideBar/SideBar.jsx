import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import Channel from "src/components/Channel/Channel";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillGearFill, BsHeadphones } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  channelsState$,
  getChannelsRequest,
} from "src/redux/slice/channelsSlice";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);
function SideBar({ className, data }) {
  const classes = cx("wrapper", {
    [className]: className,
  });

  const dispatch = useDispatch();
  const channels = useSelector(channelsState$);

  let { serverId } = useParams();
  console.log("asdasdas", data);
  const dataServer = data?.guilds.find((data) => data._id === serverId);
  // console.log("dataServer", dataServer);

  const textChannels = channels?.listChannel.filter(
    (data) => data.type === "GUILD_DM"
  );

  const voiceChannels = channels?.listChannel.filter(
    (data) => data.type === "GUILD_VOICE"
  );

  useEffect(() => {
    if (dataServer) {
      dispatch(getChannelsRequest(dataServer._id));
    }
  }, [dispatch, dataServer]);

  // console.log("textChannel", textChannels);
  return (
    <div className={classes}>
      <div className={cx("inner")}>
        <div className={cx("header-Sidebar")}>
          <p>{dataServer?.name}</p>
          <RiArrowDownSLine
            style={{
              fontSize: 22,
              color: "#d5d6d7",
            }}
          />
        </div>
        <div className={cx("container")}>
          <Channel listTextChannels={textChannels} />
          {/* <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel /> */}
        </div>
      </div>
      <div className={cx("panels")}>
        <div className={cx("inner-panels")}>
          <div className={cx("avatar-wrapper")}>
            <div className={cx("avatar")}>
              <img src={data?.avatar.imageUrl} alt="" />
            </div>
            <div className={cx("name-tag")}>
              <div className={cx("username")}>{data?.username}</div>
              <div className={cx("sub-text")}>#{data?.id_fake}</div>
            </div>
          </div>
          <div className={cx("avatar-settings")}>
            <div className={cx("icon-settings")}>
              <MdMic className={cx("icon")} />
            </div>
            <div className={cx("icon-settings")}>
              <BsHeadphones className={cx("icon")} />
            </div>
            <div className={cx("icon-settings")}>
              <BsFillGearFill className={cx("icon")} style={{ fontSize: 17 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
