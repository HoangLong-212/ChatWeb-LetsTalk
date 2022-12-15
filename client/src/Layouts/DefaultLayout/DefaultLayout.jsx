import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import LeftNav from "../components/LeftNav/LeftNav";
import SideBar from "../components/SideBar/SideBar";
import HeaderContent from "../components/HeaderContent/HeaderContent";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest, userState$ } from "src/redux/slice/userSlice";
import { channelsState$ } from "src/redux/slice/channelsSlice";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(userState$);
  // const channels = useSelector(channelsState$);

  useEffect(() => {
    const token = { authorization: localStorage.getItem("Auth_token") };
    dispatch(getUserRequest(token));
  }, [dispatch]);

  // console.log(user);
  let { serverId } = useParams();

  console.log("serverId", serverId);
  return (
    <div className={cx("wrapper")}>
      <LeftNav className={cx("left-nav")} listData={user?.data?.guilds} />
      <div className={cx("base")}>
        <SideBar className={cx("sub-sidebar")} data={user?.data} />
        <div className={cx("container")}>
          <div className={cx("header")}>
            <HeaderContent />
          </div>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
