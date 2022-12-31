import React, { useEffect } from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Chat />
    </div>
  );
}

export default Home;
