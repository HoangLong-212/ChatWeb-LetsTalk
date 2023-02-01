import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: "",
  success: false,
  isLoading: false,
};

export const memberServerSlice = createSlice({
  name: "memberServer",
  initialState,
  reducers: {
    getMemberServerRequest: (state) => {
      state.isLoading = true;
      state.isLoadOldData = false;
    },
    getMemberServerSuccess: (state, action) => {
      console.log("action.payload", action.payload);
      // state.data = action.payload.memberServer.memberServerUrl;
      // state.message = action.payload.message;
      // state.success = action.payload.success;
      // state.isLoading = false;
    },
    getMemberServerFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoadOldData = false;
    },
  },
});
export const memberServerState$ = (state) => state.memberServer;
export const memberServerActions = memberServerSlice.actions;
export default memberServerSlice.reducer;
