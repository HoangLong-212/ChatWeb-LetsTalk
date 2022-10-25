import React from "react";
import Chat from "src/components/Chat/Chat";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Chat />
    </div>
  );
}

export default Home;
