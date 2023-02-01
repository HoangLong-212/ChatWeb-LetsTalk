import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import { TbHash } from "react-icons/tb";
import GroupMess from "./TopMess/GroupMess/GroupMess";
import DirectMess from "./TopMess/DirectMess/DirectMess";
import InputMess from "./InputMess/InputMess";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import { messageState$ } from "src/redux/slice/messageSlice";
import moment from "moment";
import { socket } from "src/constants/socket";
import { useParams } from "react-router-dom";
import { userState$ } from "src/redux/slice/userSlice";
const cx = classNames.bind(styles);
function Chat() {
  const message = useSelector(messageState$);
  const { channelId } = useParams();
  const [messageReceived, setMessageReceived] = useState([]);
  const [iD, setID] = useState(channelId);

  const messageEndRef = useRef(null);
  const user = useSelector(userState$);
  // console.log("channelId", channelId);
  // console.log("user", user);

  useEffect(() => {
    console.log("iD", iD);
    console.log("channelId", channelId);
    if (iD !== channelId) {
      console.log("-----")
      setID(channelId);
    }
  }, [iD, channelId]);

  useEffect(() => {
    if (message.isLoadOldData) {
      setMessageReceived(message?.listMessage);
    }
    console.log("messsssssssssss")
  }, [message.isLoadOldData, channelId]);

  // useEffect(() => {
  socket.on("message", ({ data }) => {
    console.log("check", iD);
    console.log("check 2", data.channel_id);

    if (iD === data.channel_id) {
      // console.log("data", data);
      // console.log("user", user);
      setMessageReceived([...messageReceived, data]);
    }
    // console.log("imageSSSSS", data)
    // if(data.isImage){

    // }
  });
  // }, [socket, messageReceived, channelId]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messageReceived]);
  // console.log("messageReceived 1", messageReceived);

  // console.log("messageReceived", messageReceived);
  return (
    <div className={cx("contentWrapper")}>
      <div className={cx("chatContent")}>
        <div className={cx("wrapper")}>
          <div className={cx("inner")}>
            <div className={cx("overflow")}>
              <div className={cx("messenger")}>
                <GroupMess />
                {/* <DirectMess /> */}
                <div className={cx("divider")}>
                  <span className={cx("content")}>December 27, 2022</span>
                </div>
                {messageReceived?.map((mess, index) => {
                  // console.log(
                  //   index,
                  //   moment(mess.timestamp).format("MMMM DD, YYYY")
                  // );
                  if (mess.isImage) {
                    return <Message img key={mess._id} mess={mess} />;
                  }
                  return <Message key={mess._id} mess={mess} />;
                })}

                <div className={cx("scrollerSpacer")}></div>
                <div ref={messageEndRef} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("input-mess")}>
          <InputMess />
        </div>
      </div>
    </div>
  );
}

export default Chat;
