import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const InviteMemberModal = createSlice({
  name: "InviteMemberModal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShow = true;
    },
    hideModal: (state) => {
      state.isShow = false;
    },
  },
});
export const InviteMemberModalState$ = (state) => state.InviteMemberModal;
export const InviteMemberModalActions = InviteMemberModal.actions;
export default InviteMemberModal.reducer;
