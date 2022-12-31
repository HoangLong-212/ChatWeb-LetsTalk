import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import SideBar from "../components/SideBar/SideBar";
import HeaderContent from "../components/Header/HeaderContent/HeaderContent";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest, userState$ } from "src/redux/slice/userSlice";
import { channelsState$ } from "src/redux/slice/channelsSlice";
import { useParams } from "react-router-dom";
import { guildsState$ } from "src/redux/slice/guildsSlice";
import HeaderDM from "../components/Header/HeaderDM/HeaderDM";
import HeaderFriend from "../components/Header/HeaderFriend/HeaderFriend";
import {
  channelDataActions,
  channelDataState$,
} from "src/redux/slice/channelDataSlice";
import { BsFillGearFill, BsHeadphones } from "react-icons/bs";
import { MdMic } from "react-icons/md";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(userState$);
  const guilds = useSelector(guildsState$);
  const channel = useSelector(channelDataState$);
  let params = useParams();

  useEffect(() => {
    const token = { authorization: localStorage.getItem("Auth_token") };
    dispatch(getUserRequest(token));

    if (params.channelId) {
      // console.log(params.channelId);
      dispatch(channelDataActions.getChannelDataRequest(params.channelId));
    }
  }, [dispatch, params.channelId]);

  // console.log(user);

  // console.log("channels", channel);
  return (
    <div className={cx("wrapper")}>
      <LeftNav className={cx("left-nav")} listData={guilds?.listGuild} />
      <div className={cx("base")}>
        <div className={cx("sub-sidebar")}>
          <SideBar />
          <div className={cx("panels")}>
            <div className={cx("inner-panels")}>
              <div className={cx("avatar-wrapper")}>
                <div className={cx("avatar")}>
                  <img src={user?.data?.avatar.imageUrl} alt="" />
                </div>
                <div className={cx("name-tag")}>
                  <div className={cx("username")}>{user?.data?.username}</div>
                  <div className={cx("sub-text")}>#{user?.data?.id_fake}</div>
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
                  <BsFillGearFill
                    className={cx("icon")}
                    style={{ fontSize: 17 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("container")}>
          <div className={cx("header")}>
            <HeaderContent channelName={channel?.channel?.name} />
            {/* <HeaderDM /> */}
            {/* <HeaderFriend /> */}
          </div>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
