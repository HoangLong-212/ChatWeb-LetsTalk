import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateGuildModal.module.scss";
import { Avatar, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createGuildModalState$ } from "src/redux/slice/createGuildModalSlice";
import { createGuildModalActions } from "src/redux/slice/createGuildModalSlice";

const cx = classNames.bind(styles);
function CreateGuildModal({ className }) {
  const classes = cx("inner", {
    [className]: className,
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(createGuildModalState$);

  const handleOk = () => {
    dispatch(createGuildModalActions.hideModal());
  };

  const handleCancel = () => {
    dispatch(createGuildModalActions.hideModal());
  };

  // console.log("match", match);

  return (
    <Modal
      title="Customize your server"
      open={isShow}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={cx("wrapper")}>
        <Avatar size={80}></Avatar>

        <button>
          sadasd
          <input hidden accept="image/*" type="file" />
        </button>
      </div>
    </Modal>
  );
}

export default CreateGuildModal;
