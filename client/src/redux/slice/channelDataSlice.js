import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channel: null,
  message: "",
  success: false,
  isLoading: false,
};

export const channelDataSlice = createSlice({
  name: "channelData",
  initialState,
  reducers: {
    getChannelDataRequest: (state) => {
      state.isLoading = true;
    },
    getChannelDataSuccess: (state, action) => {
      state.channel = action.payload.channel;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.isLoading = false;
    },
    getChannelDataFailure: (state, action) => {
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
  },
});
export const channelDataState$ = (state) => state.channelData;
export const channelDataActions = channelDataSlice.actions;
export default channelDataSlice.reducer;
