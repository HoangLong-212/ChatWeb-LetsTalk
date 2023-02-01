import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./InviteMemberModal.module.scss";
import { Form, Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { channelActions } from "src/redux/slice/channelsSlice";
import {
  InviteMemberModalActions,
  InviteMemberModalState$,
} from "src/redux/slice/InviteMemberModal";
import { memberServerActions } from "src/redux/slice/memberServerSlice";

const cx = classNames.bind(styles);
function InviteMemberModal({ className }) {
  const dispatch = useDispatch();
  const { isShow } = useSelector(InviteMemberModalState$);
  const token = localStorage.getItem("Auth_token");
  const { serverId } = useParams();
  const [addMemberForm, setAddMemberForm] = useState({
    guildId: "",
    id_fake: "",
    token: token,
  });
  // console.log(channelForm);
  const handleOk = () => {
    console.log("serverId", serverId);
    setAddMemberForm({
      ...addMemberForm,
      guildId: serverId,
    });
    console.log(addMemberForm);

    dispatch(
      memberServerActions.getMemberServerRequest({
        guildId: serverId,
        nameChannel: addMemberForm.nameChannel,
        token: token,
      })
    );
    handleCancel();
  };

  const handleCancel = () => {
    setAddMemberForm({ guildId: "", id_fake: "", token: token });
    dispatch(InviteMemberModalActions.hideModal());
  };

  // console.log("match", serverForm);

  return (
    <Modal
      title="Invite Friend"
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
            name: ["id_fake"],
            value: addMemberForm.id_fake,
          },
        ]}
      >
        <Form.Item
          label="Invite friend"
          name="id_fake"
          rules={[
            {
              required: true,
              message: "Please input your friend ID !",
            },
          ]}
        >
          <Input
            placeholder="new-channel"
            value={addMemberForm.id_fake}
            onChange={(e) =>
              setAddMemberForm({ ...addMemberForm, id_fake: e.target.value })
            }
          />
        </Form.Item>  
      </Form>
    </Modal>
  );
}

export default InviteMemberModal;
