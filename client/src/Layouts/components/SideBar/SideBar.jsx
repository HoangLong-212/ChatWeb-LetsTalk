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
import { guildsState$ } from "src/redux/slice/guildsSlice";
import SideBarHomeItem from "src/components/SideBarHomeItem/SideBarHomeItem";

const cx = classNames.bind(styles);
function SideBar({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });

  const dispatch = useDispatch();
  const channels = useSelector(channelsState$);
  const guilds = useSelector(guildsState$);
  let { serverId } = useParams();
  // console.log("guilds", guilds);
  const dataServer = guilds?.listGuild.find((data) => data._id === serverId);
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
        {/* <div aria-hidden="true" style={{ height: "8px" }}></div>
          <SideBarHomeItem />
          <div className={cx("DM")}>
            <span>DIRECT MESSSAGES</span>
          </div>
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar /> <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />
          <SideBarHomeItem avatar />   */}
        <Channel listTextChannels={textChannels} />
      </div>
    </div>
  );
}

export default SideBar;
