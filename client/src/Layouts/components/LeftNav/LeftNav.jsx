import React from "react";
import classNames from "classnames/bind";
import styles from "./LeftNav.module.scss";
import IconLeftNav from "src/components/Icon/IconLeftNav/IconLeftNav";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CreateGuildModal from "src/components/Modal/CreateGuildModal/CreateGuildModal";
import { useDispatch } from "react-redux";
import { createGuildModalActions } from "src/redux/slice/createGuildModalSlice";

const cx = classNames.bind(styles);
function LeftNav({ className, listData }) {
  // console.log("list", listData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const classes = cx("wrapper", {
    [className]: className,
  });

  const openCreateGuildModal = () => {
    dispatch(createGuildModalActions.showModal());
  };

  return (
    <div className={classes}>
      <IconLeftNav
        children={
          <img
            src="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png"
            alt=""
            style={{ width: 28, height: 20 }}
          />
        }
        onClick={() => navigate("/")}
      />
      <div className={cx("strikeThrough")} />
      <div className={cx("Servers")}>
        {listData?.map((data) => (
          <IconLeftNav
            key={data._id}
            img={data.avatarUrl}
            guildId={`/${data._id}`} // "/ajhdskajshdkajsh"
          />
        ))}
      </div>
      <IconLeftNav
        className={cx("add-Server")}
        children={<AiOutlinePlus />}
        onClick={openCreateGuildModal}
      />
      <div className={cx("strikeThrough")} />
      <CreateGuildModal />
    </div>
  );
}

export default LeftNav;
