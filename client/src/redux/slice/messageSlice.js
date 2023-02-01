import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMessage: [],
  message: "",
  success: false,
  isLoading: false,
  isLoadOldData: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getMessageRequest: (state) => {
      state.isLoading = true;
      state.isLoadOldData = false;
    },
    getMessageSuccess: (state, action) => {

      state.listMessage = action.payload.listMessage;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
      state.isLoadOldData = true;
    },
    getMessageFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoadOldData = false;

    },
  },
});
export const messageState$ = (state) => state.message;
export const messageActions = messageSlice.actions;
export default messageSlice.reducer;
