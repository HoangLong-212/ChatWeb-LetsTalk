import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const peerSlice = createSlice({
  name: "peer",
  initialState,
  reducers: {
    peerRequest: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const peerState$ = (state) => state.peer.data;
export const { peerRequest } = peerSlice.actions;
export default peerSlice.reducer;
