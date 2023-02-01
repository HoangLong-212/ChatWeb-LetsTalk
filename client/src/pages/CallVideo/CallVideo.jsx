import React, { useEffect, useRef, useState } from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./CallVideo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { messageActions, messageState$ } from "src/redux/slice/messageSlice";
import { socket } from "src/constants/socket";
import { MdMic } from "react-icons/md";
import { IoVideocam, IoShieldHalf } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { userState$ } from "src/redux/slice/userSlice";
import { Peer } from "peerjs";
import { peerState$ } from "src/redux/slice/peerSlice";

const cx = classNames.bind(styles);
function CallVideo() {
  // const dispatch = useDispatch();
  const { serverId } = useParams();
  const [videoGrid, setVideoGrid] = useState([]);

  // const peer = useSelector(peerState$);
  // const [newPeer, setPeer] = useState(
  //   new Peer(undefined, {
  //     path: "/",
  //     secure: true,
  //   })
  // );
  const [stream, setStream] = useState();
  const user = useSelector(userState$);

  const newPeer = new Peer(undefined, {
    path: "/",
    secure: true,
  });
  console.log("1", newPeer);

  // useEffect(() => {
  //   console.log("user", user.data._id);
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: true,
  //       audio: false,
  //     })
  //     .then((stream) => {
  //       console.log("3");
  //       addVideoStream(user.data._id, stream);
  //       console.log("4");
  //       setStream(stream);
  //       console.log("12.1");

  //       newPeer.on("open", () => {
  //         console.log("5");

  //         socket.emit("userConnectCall", serverId);
  //       });
  //       console.log("12");

  //       newPeer.on("call", (call) => {
  //         console.log("10");
  //         call.answer(stream);

  //         call.on("stream", (userVideoStream) => {
  //           console.log("11");

  //           addVideoStream(user.data._id, userVideoStream);
  //         });
  //       });

  //       socket.on("userConnectCall", (userId) => {
  //         console.log("6");

  //         connectToNewUser(userId, stream);
  //       });
  //     });
  // }, []);

  // // socket.on("user-disconnected", (userId) => {
  // //   if (peers[userId]) peers[userId].close();
  // // });

  // const addVideoStream = (userId, stream) => {
  //   console.log("2");
  //   const newVideo = {
  //     userId: userId,
  //     stream: stream,
  //   };
  //   // console.log("addVideoStream", newVideo);
  //   setVideoGrid([...videoGrid, newVideo]);
  // };

  // const connectToNewUser = (userId, stream) => {
  //   // console.log("connect", userId, stream); //userID cua nguoi ta va stream cua minh
  //   console.log("7");
  //   const call = newPeer.call(userId, stream);

  //   call.on("stream", (userVideoStream) => {
  //     //ai do gui stream thi nhan stream do
  //     console.log("8");
  //     addVideoStream(userId, userVideoStream);
  //   });
  // };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("main__left")}>
          <div className={cx("main__videos")}>
            <div className={cx("video-grid")} id="video-grid">
              {videoGrid.map(({ stream }) => (
                <ReactPlayer
                  className={cx("video")}
                  url={stream}
                  playing
                  muted
                  width="300px"
                  height="200px"
                />
              ))}
            </div>
          </div>
          <div className={cx("main__controls")}>
            <div className={cx("main__controls__block")}>
              <div
                // onClick={muteUnmute()}
                className={cx("main__controls__button", "main__mute_button")}
              >
                <MdMic className={cx("icon")} />
                <span>Mute</span>
              </div>
              <div
                // onClick={playStop()}
                className={cx("main__controls__button", "main__video_button")}
              >
                <IoVideocam className={cx("icon")} />

                <span>Stop Video</span>
              </div>
            </div>
            <div className={cx("main__controls__block")}>
              <div className={cx("main__controls__button")}>
                <IoShieldHalf className={cx("icon")} />

                <span>Security</span>
              </div>
              <div className={cx("main__controls__button")}>
                <FaUserFriends className={cx("icon")} />

                <span>Participants</span>
              </div>
              <div className={cx("main__controls__button")}>
                <BsChatLeftFill className={cx("icon")} />

                <span>Chat</span>
              </div>
            </div>
            <div className={cx("main__controls__block")}>
              <div className={cx("main__controls__button")}>
                <span className={cx("leave_meeting")}>Leave Meeting</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("main__right")}>
          <div className={cx("main__header")}>
            <h6>Chat</h6>
          </div>
          <div className={cx("main__chat_window")}>
            <ul className={cx("messages")}></ul>
          </div>
          <div className={cx("main__message_container")}>
            <input
              className={cx("chat_message")}
              type="text"
              placeholder="Type message here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallVideo;
