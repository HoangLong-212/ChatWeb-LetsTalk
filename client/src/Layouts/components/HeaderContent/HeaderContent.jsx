import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderContent.module.scss";
import { TbHash } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { RiPushpinFill } from "react-icons/ri";
import { HiUsers, HiInbox, HiQuestionMarkCircle } from "react-icons/hi";

const cx = classNames.bind(styles);
function HeaderContent({ className }) {
  const icons = [
    IoNotifications,
    RiPushpinFill,
    HiUsers,
    HiInbox,
    HiQuestionMarkCircle,
  ];

  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("title")}>
        <TbHash style={{ fontSize: 24, margin: "0 8px", opacity: 0.4 }} />
        <div className={cx("text")}>title</div>
      </div>
      <div className={cx("toolbar")}>
        {icons.map((Icon, i) => (
          <Icon key={i} className={cx("icon")} />
        ))}
      </div>
    </div>
  );
}

export default HeaderContent;
