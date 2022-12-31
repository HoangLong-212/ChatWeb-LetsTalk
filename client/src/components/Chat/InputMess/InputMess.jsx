import React from "react";
import classNames from "classnames/bind";
import styles from "./InputMess.module.scss";
import { Input } from "antd";
import { GiftFilled, PlusCircleFilled } from "@ant-design/icons";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { channelDataState$ } from "src/redux/slice/channelDataSlice";

const cx = classNames.bind(styles);
function InputMess({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });

  const channel = useSelector(channelDataState$);

  return (
    <div className={classes}>
      <Input
        style={{ height: "auto", wordWrap: "break-word" }}
        size="large"
        placeholder={`Message #${channel?.channel?.name.toLowerCase()}`}
        prefix={<PlusCircleFilled className={cx("icon")} />}
        suffix={
          <div style={{ display: "flex", alignItems: "center" }}>
            <GiftFilled className={cx("icon-suffix")} />
            <PlusCircleFilled className={cx("icon-suffix")} />
            <BsFillEmojiHeartEyesFill className={cx("icon-suffix")} />
          </div>
        }
        onPressEnter={(e) => console.log(e)}
      />
    </div>
  );
}

export default InputMess;
