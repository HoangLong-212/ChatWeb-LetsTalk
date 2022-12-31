import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateGuildModal.module.scss";
import { Avatar, Form, Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createGuildModalState$ } from "src/redux/slice/createGuildModalSlice";
import { createGuildModalActions } from "src/redux/slice/createGuildModalSlice";
import { guildsActions } from "src/redux/slice/guildsSlice";

const cx = classNames.bind(styles);
function CreateGuildModal({ className }) {
  const classes = cx("inner", {
    [className]: className,
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(createGuildModalState$);
  let formData = new FormData();
  const token = localStorage.getItem("Auth_token");
  const [serverForm, setServerForm] = useState({
    file: "",
    avatar: "",
    name: "",
  });

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setServerForm({ ...serverForm, file: file, avatar: file.preview });
    }
  };

  const handleOk = () => {
    formData.append("avatar", serverForm.file);
    formData.append("serverName", serverForm.name);
    for (const value of formData.values()) {
      console.log(value);
    }
    dispatch(guildsActions.createGuildsRequest({ formData, token }));
    handleCancel();
  };

  const handleCancel = () => {
    setServerForm({ ...serverForm, file: "", avatar: "", name: "" });
    dispatch(createGuildModalActions.hideModal());
  };

  // console.log("match", serverForm);

  return (
    <Modal
      title="Customize your server"
      open={isShow}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={cx("avatar")}>
        <input
          id="file"
          accept="image/*"
          type="file"
          hidden
          onChange={handlePreviewAvatar}
        />
        <label htmlFor="file">
          <Avatar src={serverForm.avatar} size={80}></Avatar>
        </label>
      </div>

      <Form
        name="basic"
        layout="vertical"
        onFinish={{}}
        onFinishFailed={{}}
        autoComplete="off"
        fields={[
          {
            name: ["server"],
            value: serverForm.name,
          },
        ]}
      >
        <Form.Item
          label="Server name"
          name="server"
          rules={[
            {
              required: true,
              message: "Please input your Server name!",
            },
          ]}
        >
          <Input
            value={serverForm.name}
            onChange={(e) =>
              setServerForm({ ...serverForm, name: e.target.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateGuildModal;
