import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listChannel: [],
  message: "",
  success: false,
  isLoading: false,
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    getChannelsRequest: (state) => {
      state.isLoading = true;
    },
    getChannelsSuccess: (state, action) => {
      state.listChannel = action.payload.listChannel;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getChannelsFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const channelsState$ = (state) => state.channels;
export const { getChannelsRequest, getChannelsSuccess, getChannelsFailure } =
  channelsSlice.actions;
export default channelsSlice.reducer;
