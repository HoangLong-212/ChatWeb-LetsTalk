import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderDM.module.scss";
import { TbHash } from "react-icons/tb";
import { MdPhoneInTalk } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { HiUsers, HiInbox, HiQuestionMarkCircle } from "react-icons/hi";
import { AiOutlineWechat } from "react-icons/ai";

const cx = classNames.bind(styles);
function HeaderDM({ className }) {
  const icons = [
    MdPhoneInTalk,
    IoVideocam,
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
        <AiOutlineWechat
          style={{ fontSize: 32, margin: "0 8px", opacity: 0.4 }}
        />
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

export default HeaderDM;
