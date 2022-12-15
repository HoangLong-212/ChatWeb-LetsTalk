import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listChannel: [],
  message: "",
  success: false,
  isLoading: false,
};

export const avatarServerSlice = createSlice({
  name: "avatarServer",
  initialState,
  reducers: {
    getAvatarServerRequest: (state) => {
      state.isLoading = true;
    },
    getAvatarServerSuccess: (state, action) => {
      state.listChannel = action.payload.listChannel;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getAvatarServerFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const avatarServerState$ = (state) => state.avatarServer;
export const avatarServerActions = avatarServerSlice.actions;
export default avatarServerSlice.reducer;
