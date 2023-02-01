import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputMess.module.scss";
import { Input } from "antd";
import { GiftFilled, PlusCircleFilled } from "@ant-design/icons";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { channelDataState$ } from "src/redux/slice/channelDataSlice";
import { useParams } from "react-router-dom";
import { socket } from "src/constants/socket";
import { imageActions, imageState$ } from "src/redux/slice/imageSlice";

const cx = classNames.bind(styles);
function InputMess({ className }) {
  const classes = cx("wrapper", {
    [className]: className,
  });
  const dispatch = useDispatch();
  const channel = useSelector(channelDataState$);
  const image = useSelector(imageState$);
  const [message, setMessage] = useState("");
  const { channelId } = useParams();
  // console.log("message", typeof message);
  const [serverForm, setServerForm] = useState({
    file: "",
    avatar: "",
    isImage: "true",
  });
  let formData = new FormData();
  const token = localStorage.getItem("Auth_token");
  const handleEnter = (e) => {
    // console.log("e.target.value", typeof e.target.value);

    const timestamp = new Date();
    let message = e.target.value;
    if (message) {
      if (message !== "[object File]") {
        // console.log("a", message);
        socket.emit("message", {
          timestamp: timestamp,
          content: message,
          isImage: "false",
          channel_id: channelId,
        });
      } else {
        // console.log("b", message);

        formData.append("image", serverForm.file);
        // for (const value of formData.values()) {
        //   console.log(value);
        // }
        dispatch(imageActions.getImageRequest({ formData, token }));
      }

      setMessage("");
    }
  };
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      // console.log(file.preview);
      setServerForm({ ...serverForm, file: file, avatar: file.preview });
      setMessage(file);
    }
  };

  useEffect(() => {
    if (image?.data) {
      const timestamp = new Date();
      socket.emit("message", {
        timestamp: timestamp,
        content: image?.data,
        isImage: "true",
        channel_id: channelId,
      });
    }
  }, [image]);

  // console.log(message);
  return (
    <div className={classes}>
      <Input
        style={{ height: "auto", wordWrap: "break-word" }}
        size="large"
        placeholder={`Message #${channel?.channel?.name.toLowerCase()}`}
        prefix={
          <>
            <input
              id="file"
              accept="image/*"
              type="file"
              hidden
              onChange={handlePreviewAvatar}
            />
            <label htmlFor="file">
              <PlusCircleFilled className={cx("icon")} />
            </label>
          </>
        }
        suffix={
          <div style={{ display: "flex", alignItems: "center" }}>
            <GiftFilled className={cx("icon-suffix")} />
            <PlusCircleFilled className={cx("icon-suffix")} />
            <BsFillEmojiHeartEyesFill className={cx("icon-suffix")} />
          </div>
        }
        type={typeof message === "string" ? "text" : "image"}
        value={message}
        src={message?.preview}
        onChange={(e) => {
          // console.log(e.target.value);
          setMessage(e.target.value);
        }}
        onPressEnter={handleEnter}
      />
    </div>
  );
}

export default InputMess;
