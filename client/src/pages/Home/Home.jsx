import React, { useEffect } from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function Home() {
  // const url = window.location.pathname;
  // const path = url.split("/").filter((x) => x);

  // const headerURL = path[0];
  let { serverId } = useParams();

  console.log("headerURL", serverId);
  // const dispatch = useDispatch();
  // const user = useSelector(userState$);

  // useEffect(() => {
  //   const token = { authorization: localStorage.getItem("Auth_token") };
  //   dispatch(getUserRequest(token));
  // }, [dispatch]);

  return (
    <div className={cx("wrapper")}>
      <Chat />
    </div>
  );
}

export default Home;
