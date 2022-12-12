import React, { useEffect } from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest, userState$ } from "src/redux/slice/userSlice";

const cx = classNames.bind(styles);
function Home() {
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
