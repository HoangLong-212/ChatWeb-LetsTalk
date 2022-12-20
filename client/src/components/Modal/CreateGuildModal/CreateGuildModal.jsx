import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateGuildModal.module.scss";
import { Avatar, Form, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createGuildModalState$ } from "src/redux/slice/createGuildModalSlice";
import { createGuildModalActions } from "src/redux/slice/createGuildModalSlice";
import Input from "antd/lib/input/Input";

const cx = classNames.bind(styles);
function CreateGuildModal({ className }) {
  const classes = cx("inner", {
    [className]: className,
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(createGuildModalState$);
  let formData = new FormData();
  const [serverForm, setServerForm] = useState({
    avatar: "",
    name: "",
  });

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      formData.append("avatar", file);
      file.preview = URL.createObjectURL(file);
      setServerForm({ ...serverForm, avatar: file.preview });
    }
  };

  const handleOk = () => {
    formData.append("serverName", serverForm.name);
  };

  const handleCancel = () => {
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
