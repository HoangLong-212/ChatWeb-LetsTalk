import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateTextChannelModal.module.scss";
import { Form, Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  createTextChannelModalActions,
  createTextChannelModalState$,
} from "src/redux/slice/createTextChannelModalSlice";
import { useParams } from "react-router-dom";
import { channelActions } from "src/redux/slice/channelsSlice";

const cx = classNames.bind(styles);
function CreateTextChannelModal({ className }) {
  const dispatch = useDispatch();
  const { isShow } = useSelector(createTextChannelModalState$);
  const token = localStorage.getItem("Auth_token");
  const { serverId } = useParams();
  const [channelForm, setChannelForm] = useState({
    guildId: "",
    nameChannel: "",
    token: token,
  });
  // console.log(channelForm);
  const handleOk = () => {
    // formData.append("avatar", serverForm.file);
    // formData.append("serverName", serverForm.name);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // console.log("serverId", serverId);
    setChannelForm({
      ...channelForm,
      guildId: serverId,
    });
    // console.log(channelForm);

    dispatch(
      channelActions.createChannelsRequest({
        guildId: serverId,
        nameChannel: channelForm.nameChannel,
        token: token,
      })
    );
    handleCancel();
  };

  const handleCancel = () => {
    setChannelForm({ guildId: "", nameChannel: "", token: token });
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
        fields={[
          {
            name: ["channel"],
            value: channelForm.nameChannel,
          },
        ]}
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
            value={channelForm.nameChannel}
            onChange={(e) =>
              setChannelForm({ ...channelForm, nameChannel: e.target.value })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateTextChannelModal;
