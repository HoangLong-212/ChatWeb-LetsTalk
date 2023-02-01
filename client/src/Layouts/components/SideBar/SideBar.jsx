import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import Channel from "src/components/Channel/Channel";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillGearFill, BsHeadphones } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { useParams } from "react-router-dom";
import { channelActions, channelsState$ } from "src/redux/slice/channelsSlice";
import { useDispatch, useSelector } from "react-redux";
import { guildsState$ } from "src/redux/slice/guildsSlice";
import SideBarHomeItem from "src/components/SideBarHomeItem/SideBarHomeItem";
import { InviteMemberModalActions } from "src/redux/slice/InviteMemberModal";
import InviteMemberModal from "src/components/Modal/InviteMemberModal/InviteMemberModal";

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
      dispatch(channelActions.getChannelsRequest(dataServer._id));
    }
  }, [dispatch, dataServer]);

  const openInviteMemberModal = () => {
    console.log("asdasda");
    dispatch(InviteMemberModalActions.showModal());
  };
  // console.log("textChannel", textChannels);
  return (
    <div className={cx("inner")}>
      <div className={cx("header-Sidebar")} onClick={openInviteMemberModal}>
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
      </div>
      <InviteMemberModal />
    </div>
  );
}

export default SideBar;
