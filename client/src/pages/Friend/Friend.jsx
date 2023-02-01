import React, { useEffect } from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./Friend.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Badge, Input } from "antd";
import Avatar from "src/components/Avatar/Avatar";
import { RiMessage2Fill, RiMore2Fill } from "react-icons/ri";
import FriendListItem from "src/components/FriendListItem/FriendListItem";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const { Search } = Input;

const cx = classNames.bind(styles);
function Friend() {
  const listBackground = [
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-simple-pink-bubble-universal-background-material-backgroundposter-backgroundbanner-backgroundpsd-image_52079.jpg",
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-light-yellow-minimalist-background-image_257954.jpg",
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-simple-pink-white-background-material-backgroundbanner-backgroundpsd-backgroundbackgroundbackground-image_53399.jpg",
    "https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-green-fresh-wild-background-image_253880.jpg",
    "https://img4.thuthuatphanmem.vn/uploads/2020/12/25/anh-background-don-sac-cho-powerpoint_101108908.png",
  ];
  const onSearch = (value) => console.log(value);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("peopleColumn")}>
        <div className={cx("searchBar")}>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
          />
        </div>
        <h2 className={cx("title")}>ALL Friends</h2>
        <div className={cx("peopleList")}>
          <div>
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
          </div>
        </div>
      </div>
      <div className={cx("dataUser")}>
        <div className={cx("container")}>
          <div>
            <img
              className={cx("background")}
              alt=""
              src={
                listBackground[
                  Math.floor(Math.random() * listBackground.length)
                ]
              }
            />
            <Avatar offline large className={cx("avatar")} />
          </div>
          <div className={cx("info")}>
            <div className={cx("section")}>
              <p className={cx("username")}>Minh Dinh #1234</p>
            </div>
            <div className={cx("divider")}></div>
            <div className={cx("section")}>
              <p className={cx("since")}>DISCORD MEMBER SINCE</p>
              <p style={{ fontSize: 14, color: "#DCDDDE" }}>Jun 10, 2021</p>
            </div>
            <div className={cx("divider")}></div>
            <div className={cx("section")}>
              <p>NOTE</p>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friend;
