import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const createGuildModalSlice = createSlice({
  name: "createGuildModal",
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
export const createGuildModalState$ = (state) => state.createGuildModal;
export const createGuildModalActions = createGuildModalSlice.actions;
export default createGuildModalSlice.reducer;
