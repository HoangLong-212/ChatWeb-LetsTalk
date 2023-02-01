import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderContent.module.scss";
import { TbHash } from "react-icons/tb";
import { IoNotifications, IoCall } from "react-icons/io5";
import { RiPushpinFill } from "react-icons/ri";
import { HiUsers, HiInbox, HiQuestionMarkCircle } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import InviteMemberModal from "src/components/Modal/InviteMemberModal/InviteMemberModal";
import { useDispatch } from "react-redux";
import { InviteMemberModalActions } from "src/redux/slice/InviteMemberModal";

const cx = classNames.bind(styles);
function HeaderContent({ className, channelName }) {
  const icons = [
    IoCall,
    IoNotifications,
    HiUsers,
    HiInbox,
    HiQuestionMarkCircle,
  ];

  const classes = cx("wrapper", {
    [className]: className,
  });
  const navigate = useNavigate();
  const { serverId } = useParams();
  // console.log("asd", channelId);
  const dispatch = useDispatch();

  return (
    <div className={classes}>
      <div className={cx("title")}>
        <TbHash style={{ fontSize: 24, margin: "0 8px", opacity: 0.4 }} />
        <div className={cx("text")}>{channelName}</div>
      </div>
      <div className={cx("toolbar")}>
        {icons.map((Icon, i) => {
          if (i === 0) {
            return (
              <Icon
                key={i}
                className={cx("icon")}
                onClick={() => navigate(`/callVideo/${serverId}`)}
              />
            );
          }
          return <Icon key={i} className={cx("icon")} />;
        })}
      </div>
    </div>
  );
}

export default HeaderContent;
