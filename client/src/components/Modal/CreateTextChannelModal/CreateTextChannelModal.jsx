import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateTextChannelModal.module.scss";
import { Form, Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  createTextChannelModalActions,
  createTextChannelModalState$,
} from "src/redux/slice/createTextChannelModalSlice";

const cx = classNames.bind(styles);
function CreateTextChannelModal({ className }) {
  const dispatch = useDispatch();
  const { isShow } = useSelector(createTextChannelModalState$);
  const token = localStorage.getItem("Auth_token");

  const handleOk = () => {
    // formData.append("avatar", serverForm.file);
    // formData.append("serverName", serverForm.name);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // dispatch(guildsActions.createGuildsRequest({ formData, token }));
    handleCancel();
  };

  const handleCancel = () => {
    // setServerForm({ ...serverForm, file: "", avatar: "", name: "" });
    dispatch(createTextChannelModalActions.hideModal());
  };

  // console.log("match", serverForm);

  return (
    <Modal
      title="Create Channel"
      open={isShow}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={{}}
        onFinishFailed={{}}
        autoComplete="off"
        // fields={[
        //   {
        //     name: ["server"],
        //     value: serverForm.name,
        //   },
        // ]}
      >
        <Form.Item
          label="Channel name"
          name="channel"
          rules={[
            {
              required: true,
              message: "Please input your Channel name!",
            },
          ]}
        >
          <Input
            placeholder="new-channel"
            // value={serverForm.name}
            // onChange={(e) =>
            //   setServerForm({ ...serverForm, name: e.target.value })
            // }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateTextChannelModal;
