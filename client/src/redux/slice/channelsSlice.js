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
    createChannelsRequest: (state) => {
      state.isLoading = true;
    },
    createChannelsSuccess: (state, action) => {
      console.log("action.payloadchannel", action.payload);
      state.listChannel = [...state.listChannel, action.payload.newChannel];
      // console.log("state.listGuild", state.listGuild);

      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    createChannelsFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const channelsState$ = (state) => state.channels;
export const channelActions = channelsSlice.actions;
export default channelsSlice.reducer;
