import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const createTextChannelModalSlice = createSlice({
  name: "createTextChannelModal",
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
export const createTextChannelModalState$ = (state) => state.createTextChannelModal;
export const createTextChannelModalActions = createTextChannelModalSlice.actions;
export default createTextChannelModalSlice.reducer;
